#!/usr/bin/env node
/*
  Regenerates sitemap.xml and feed.xml (RSS) from content/articles.json.
  Only articles with status "published" are listed. Run by the GitHub Action in
  .github/workflows/update-sitemap.yml whenever articles.json changes, or by hand:
      node scripts/generate-sitemap.mjs
*/
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = readFileSync(join(root, "js", "config.js"), "utf8");
const site = (config.match(/siteUrl:\s*["']([^"']+)["']/)?.[1] || "").replace(/\/$/, "");
if (!site) { console.error("siteUrl not found in js/config.js"); process.exit(1); }

const articles = JSON.parse(readFileSync(join(root, "content", "articles.json"), "utf8"))
  .filter(a => a && a.status === "published" && a.slug && a.english && a.bangla)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const isDate = d => /^\d{4}-\d{2}-\d{2}$/.test(String(d || ""));
const newest = articles.find(a => isDate(a.date))?.date;

const entry = (path, { changefreq, priority, lastmod }) =>
  `  <url><loc>${esc(site + path)}</loc>` +
  (lastmod ? `<lastmod>${lastmod}</lastmod>` : "") +
  `<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;

const lines = [
  entry("/", { changefreq: "weekly", priority: "1.0", lastmod: newest }),
  entry("/articles.html", { changefreq: "weekly", priority: "0.8", lastmod: newest }),
  ...articles.map(a => entry(`/blog.html?slug=${encodeURIComponent(a.slug)}`, {
    changefreq: "monthly", priority: "0.7", lastmod: isDate(a.date) ? a.date : undefined })),
  entry("/about.html", { changefreq: "yearly", priority: "0.4" }),
  entry("/privacy.html", { changefreq: "yearly", priority: "0.3" }),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join("\n")}\n</urlset>\n`;
writeFileSync(join(root, "sitemap.xml"), xml);
console.log(`sitemap.xml updated: ${articles.length} published article(s)`);

// RSS 2.0 feed (English titles and descriptions) so readers and aggregators can follow new posts.
const rfc822 = d => new Date(d + "T12:00:00Z").toUTCString();
const items = articles.filter(a => isDate(a.date)).slice(0, 30).map(a => {
  const link = `${site}/blog.html?slug=${encodeURIComponent(a.slug)}`;
  return `    <item>\n      <title>${esc(a.english.title)}</title>\n      <link>${esc(link)}</link>\n      <guid isPermaLink="true">${esc(link)}</guid>\n` +
         `      <pubDate>${rfc822(a.date)}</pubDate>\n      <category>${esc(a.english.category || "")}</category>\n      <description>${esc(a.english.excerpt || "")}</description>\n    </item>`;
});
const feed = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n` +
  `    <title>BloodLink Blog</title>\n    <link>${esc(site)}/</link>\n    <description>Clear, reliable information about blood donation.</description>\n    <language>en</language>\n` +
  `    <atom:link href="${esc(site)}/feed.xml" rel="self" type="application/rss+xml"/>\n` +
  (newest ? `    <lastBuildDate>${rfc822(newest)}</lastBuildDate>\n` : "") + items.join("\n") + `\n  </channel>\n</rss>\n`;
writeFileSync(join(root, "feed.xml"), feed);
console.log(`feed.xml updated: ${items.length} item(s)`);
