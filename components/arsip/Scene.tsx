"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, useTexture } from "@react-three/drei";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { useMemo } from "react";
import * as THREE from "three";

/*
  Beranda: gambar adegan (public/assets/hero.jpg) + peta kedalaman (hero-depth.png).
  Shader menggeser tiap bagian gambar sesuai kedalamannya, jadi yang dekat (buku, bunga)
  bergerak lebih jauh daripada yang jauh (langit). Efek 3D dari satu gambar.
  Ganti hero.jpg dengan gambar baru, lalu perbarui hero-depth.png agar kedalamannya cocok.
*/

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform sampler2D uMap;
  uniform sampler2D uDepth;
  uniform vec2 uPointer;
  uniform float uAspect;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    // "cover": gambar persegi memenuhi layar tanpa meregang
    bool wide = uAspect > 1.0;
    vec2 span = (wide ? vec2(1.0, 1.0 / uAspect) : vec2(uAspect, 1.0)) * 0.93;
    float cy = clamp(0.482, span.y * 0.5 + 0.03, 1.0 - span.y * 0.5 - 0.03);
    vec2 center = vec2(0.5, wide ? cy : 0.5);
    vec2 base = center + (vUv - 0.5) * span;

    float depth = texture2D(uDepth, base).r;
    vec2 shift = -uPointer * (depth - 0.45) * vec2(0.013, 0.008);
    vec2 uv = clamp(base + shift, 0.002, 0.998);

    vec3 c = texture2D(uMap, uv).rgb;

    // cahaya layar laptop berdenyut sangat halus
    float lum = dot(c, vec3(0.299, 0.587, 0.114));
    float warm = smoothstep(0.0, 0.25, c.r - c.b);
    c += vec3(1.0, 0.82, 0.45) * smoothstep(0.7, 1.0, lum) * warm * (0.05 + 0.04 * sin(uTime * 1.3));

    // tone film: hitam sedikit pudar, warna sedikit lembut
    c = mix(c, vec3(dot(c, vec3(0.299, 0.587, 0.114))), 0.06);
    c = c * 0.95 + 0.012;

    gl_FragColor = vec4(c, 1.0);
    #include <colorspace_fragment>
  }
`;

function HeroPlane() {
  const { viewport, size, pointer } = useThree();
  const [map, depth] = useTexture(["/assets/hero.jpg", "/assets/hero-depth.png"]);

  const material = useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 4;
    return new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uMap: { value: map },
        uDepth: { value: depth },
        uPointer: { value: new THREE.Vector2() },
        uAspect: { value: 1 },
        uTime: { value: 0 },
      },
      toneMapped: false,
      depthWrite: false,
    });
  }, [map, depth]);

  const smooth = useMemo(() => new THREE.Vector2(), []);
  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const k = 1 - Math.exp(-dt * 2.2);
    // kursor + gerak pelan sendiri, supaya adegan terasa bernapas
    const tx = pointer.x * 0.8 + Math.sin(t * 0.25) * 0.35;
    const ty = pointer.y * 0.8 + Math.cos(t * 0.2) * 0.25;
    smooth.x += (tx - smooth.x) * k;
    smooth.y += (ty - smooth.y) * k;
    material.uniforms.uPointer.value.copy(smooth);
    material.uniforms.uAspect.value = size.width / size.height;
    material.uniforms.uTime.value = t;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}

function Fireflies({ count }: { count: number }) {
  const { viewport } = useThree();
  return (
    <Sparkles
      count={count}
      scale={[viewport.width, viewport.height * 0.55, 1]}
      position={[0, -viewport.height * 0.18, 1]}
      size={4}
      speed={0.25}
      opacity={0.85}
      color="#ffd983"
      noise={0.6}
    />
  );
}

export default function Scene() {
  const low = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches || (navigator.hardwareConcurrency ?? 8) <= 4;
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        orthographic
        dpr={[1, low ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 10], near: 0.1, far: 50 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <HeroPlane />
        <Fireflies count={low ? 25 : 60} />
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={low ? 0.5 : 0.75} luminanceThreshold={0.82} luminanceSmoothing={0.3} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.22} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
