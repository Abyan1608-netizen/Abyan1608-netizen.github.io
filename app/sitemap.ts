import type { MetadataRoute } from "next";
import { babDi, semuaMapel } from "@/lib/content";
import { site } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const halaman: MetadataRoute.Sitemap = [{ url: site.url + "/", changeFrequency: "weekly", priority: 1 }];
  for (const mapel of semuaMapel()) {
    const bab = babDi(mapel);
    halaman.push({ url: `${site.url}/baca/${mapel}`, changeFrequency: "weekly", priority: 0.8 });
    for (const b of bab) {
      halaman.push({
        url: `${site.url}/baca/${mapel}/${b.slug}`,
        lastModified: b.diperbarui,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }
  return halaman;
}
