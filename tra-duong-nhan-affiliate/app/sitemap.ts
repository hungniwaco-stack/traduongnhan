import type { MetadataRoute } from "next";
import { posts, products } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://traduongnhan.shop";
  const staticRoutes = [
    "",
    "/tra-duong-nhan",
    "/review-tra-duong-nhan",
    "/routine-dep-da",
    "/thanh-loc-co-the",
    "/kien-thuc-duong-nhan",
    "/san-pham",
    "/ve-chung-toi",
    "/chinh-sach-affiliate",
    "/lien-he",
    "/dieu-khoan-su-dung"
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const postEntries = posts.map((post) => ({
    url: `${base}/bai-viet/${post.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const productEntries = products.map((product) => ({
    url: `${base}/san-pham/${product.id}/`,
    changeFrequency: "weekly" as const,
    priority: 0.75
  }));

  return [...staticEntries, ...postEntries, ...productEntries];
}

