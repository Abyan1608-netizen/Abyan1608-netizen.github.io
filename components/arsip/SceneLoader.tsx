"use client";

import dynamic from "next/dynamic";

// Adegan 3D hanya jalan di browser (WebGL), jadi dimuat tanpa SSR.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneLoader() {
  return <Scene />;
}
