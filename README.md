# BloodLink Blog — Complete Owner's Manual

This README is the main guide for editing, publishing, measuring, and maintaining the BloodLink Blog website. You do not need to create a new HTML page for every article. The site is a static HTML/CSS/JavaScript project; article content is stored in `js/articles.js`; website settings are stored separately in `js/config.js`.

> **Important:** Make a backup of the current website folder before making changes. After editing, test the site locally, then upload/publish the whole project folder.

## Contents

1. [What each file does](#1-what-each-file-does)
2. [Edit the website on your computer](#2-edit-the-website-on-your-computer)
3. [Publish or update the live website](#3-publish-or-update-the-live-website)
4. [Add, edit, or remove a blog](#4-add-edit-or-remove-a-blog)
5. [Images and accessible alt text](#5-images-and-accessible-alt-text)
6. [Change the logo, colors, and page text](#6-change-the-logo-colors-and-page-text)
7. [Edit the three-line menu](#7-edit-the-three-line-menu)
8. [SEO basics and metadata](#8-seo-basics-and-metadata)
9. [Open Graph/social sharing previews](#9-open-graphsocial-sharing-previews)
10. [Sitemap and robots.txt](#10-sitemap-and-robotstxt)
11. [Google Search Console](#11-google-search-console)
12. [Google Analytics 4](#12-google-analytics-4)
13. [404 page and privacy policy](#13-404-page-and-privacy-policy)
14. [Loading states and troubleshooting](#14-loading-states-and-troubleshooting)
15. [Before every release checklist](#15-before-every-release-checklist)
16. [Useful official resources](#16-useful-official-resources)

---

## 1. What each file does

```text
BloodLink-Blog/
├── index.html       Homepage, article list, and homepage SEO metadata
├── articles.html    All articles: search and topic filters
├── about.html       About page (text lives in js/app.js, in English and Bangla)
├── feed.xml         RSS feed (rebuilt automatically)
├── manifest.webmanifest   App name, colours and icons for "Add to home screen"
├── blog.html        Shared template for individual article URLs and dynamic metadata
├── 404.html         Custom not-found page (supported by GitHub Pages)
├── privacy.html     Privacy policy page
├── sitemap.xml      List of public URLs for search engines (rebuilt automatically)
├── scripts/generate-sitemap.mjs   Builds sitemap.xml from content/articles.json
├── .github/workflows/update-sitemap.yml   Runs the script when the CMS saves an article
├── robots.txt       Search crawler instructions and sitemap location
├── css/
│   └── style.css    Colors, layout, cards, mobile styling, loading indicators
├── js/
│   ├── config.js    Website settings: URL, Analytics ID, report email, language
│   ├── articles.js  All published blog articles (edit this for normal publishing)
│   ├── site.js      Footer year, contact links from config.js, back-to-top button
│   ├── analytics.js Loads GA4 only when a real Measurement ID is configured
│   └── app.js       Search, filters, menu, language, rendering, and article metadata
├── assets/
│   └── bloodlink-logo.png
├── ARTICLE-TEMPLATE.js  Copy-and-paste starter template for new articles
└── README.md        This owner's manual
```

**For normal publishing, edit `js/articles.js` and use `ARTICLE-TEMPLATE.js`. Edit `js/config.js` only for website-wide settings.** Use a plain-text/code editor such as Visual Studio Code. Do not edit files in a word processor such as Microsoft Word.

## 2. Edit the website on your computer

### On a computer (recommended)

1. Download the latest project ZIP and extract it.
2. Open the extracted `BloodLink-Blog` folder in Visual Studio Code.
3. Open `ARTICLE-TEMPLATE.js` for the article template, then add the copied article object to `js/articles.js`. Open `js/config.js` only for website-wide settings.
4. Open `index.html` with the VS Code **Live Server** extension to test the website. If you open files by double-clicking them, some browser features and URL behaviour may not work as expected.
5. Check the homepage, open an article, test search, switch English/Bangla, open the menu, and check the privacy and 404 pages.

### On Android

You can edit the files with a code editor that supports HTML, CSS, and JavaScript, but managing a ZIP and publishing updates is usually easier on a computer. If you edit on Android, keep the folder structure and exact file names unchanged.

## 3. Publish or update the live website

This project currently uses URLs based on `https://bloodlink-team.github.io/BloodLink-Blog-Page/`. If you use a different GitHub Pages username/repository or a custom domain, update every example URL mentioned in this guide and the files.

### Publish with GitHub Pages

1. Sign in to GitHub and create or open the repository that will host the website.
2. Upload the **contents** of the `BloodLink-Blog` folder, including `index.html`, `blog.html`, `404.html`, `privacy.html`, `sitemap.xml`, `robots.txt`, and the `css`, `js`, and `assets` folders. Do not upload only the ZIP file.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment source, select the branch you publish from (commonly `main`) and the correct folder (commonly `/(root)`), then save.
5. Wait for GitHub Pages to finish deploying. Open the public URL shown in Settings → Pages.
6. Test the homepage and a direct article URL on the live domain.

For a project repository such as `username.github.io/repository-name/`, the public URL may include `/repository-name/`. In that case, paths and canonical URLs must match the actual deployed location. A custom domain needs additional setup in GitHub Pages and DNS.

### Update an already-published site

1. Edit the local files.
2. Test them.
3. Upload/commit the changed files to the same repository and branch.
4. Wait for deployment and hard-refresh the website.
5. Test the live version, not just the local version.

**Never assume an update is live just because you saved a local file.**

## 4. Add, edit, or remove a blog

Open `ARTICLE-TEMPLATE.js` to get a ready-made article structure. Published article objects live in the `window.BLOODLINK_BLOGS` array inside `js/articles.js`.

### Add a blog

Copy the object from `ARTICLE-TEMPLATE.js`, paste it inside the `window.BLOODLINK_BLOGS` array in `js/articles.js`, and change all of its values. Make sure objects are separated with commas. Keep the final object's trailing comma valid JavaScript (modern browsers accept it).

Example structure:

```js
{
  slug: "healthy-donation-preparation",
  category: { en: "Donor Guide", bn: "রক্তদানের নির্দেশিকা" },
  date: "2026-10-26",
  readMinutes: 5,
  image: "assets/donation-preparation.jpg",
  imageAlt: {
    en: "A blood donation worker preparing equipment",
    bn: "রক্তদানের সরঞ্জাম প্রস্তুত করছেন একজন কর্মী"
  },
  title: {
    en: "How to Prepare for Blood Donation",
    bn: "রক্তদানের জন্য কীভাবে প্রস্তুতি নেবেন"
  },
  excerpt: {
    en: "Practical steps to discuss with your donation centre before donating.",
    bn: "রক্তদানের আগে কেন্দ্রের সঙ্গে আলোচনা করার কিছু ব্যবহারিক বিষয়।"
  },
  metaDescription: {
    en: "Learn practical ways to prepare for blood donation and what to confirm with your local donation centre.",
    bn: "রক্তদানের প্রস্তুতি এবং স্থানীয় রক্তদান কেন্দ্রের সঙ্গে কী নিশ্চিত করবেন তা জানুন।"
  },
  ogImage: "https://YOUR-SITE-URL/assets/donation-preparation.jpg",
  body: {
    en: [
      {
        heading: "Before your appointment",
        paragraphs: [
          "Write your first paragraph here.",
          "Write another paragraph here."
        ]
      },
      {
        heading: "Ask the donation centre",
        bullets: [
          "Confirm the current eligibility requirements.",
          "Follow the instructions provided by qualified staff."
        ]
      },
      {
        callout: "Eligibility and clinical advice must be confirmed with qualified healthcare professionals."
      }
    ],
    bn: [
      {
        heading: "অ্যাপয়েন্টমেন্টের আগে",
        paragraphs: [
          "এখানে প্রথম বাংলা অনুচ্ছেদ লিখুন।",
          "এখানে দ্বিতীয় বাংলা অনুচ্ছেদ লিখুন।"
        ]
      },
      {
        heading: "রক্তদান কেন্দ্রকে জিজ্ঞাসা করুন",
        bullets: [
          "বর্তমান যোগ্যতার নিয়ম নিশ্চিত করুন।",
          "যোগ্য স্বাস্থ্যকর্মীদের নির্দেশনা অনুসরণ করুন।"
        ]
      },
      {
        callout: "রক্তদানের যোগ্যতা ও চিকিৎসাসংক্রান্ত পরামর্শ যোগ্য স্বাস্থ্যকর্মীর কাছ থেকে নিশ্চিত করুন।"
      }
    ]
  }
}
```

This is a template example; replace the example URL, image, content, and date with your real details.

### Rules for article fields

- `slug`: unique, lowercase, URL-friendly text with hyphens. Do not reuse a slug. Example: `healthy-donation-preparation`.
- `category`: add English and Bangla labels.
- `date`: use `YYYY-MM-DD`.
- `readMinutes`: estimated reading time in minutes.
- `image`: image path or image URL.
- `imageAlt`: describe the meaningful content of the image in English and Bangla. Do not stuff it with keywords.
- `title`, `excerpt`: write both English and Bangla versions.
- `metaDescription`: recommended for each article. Write a clear, unique summary; it is a search-result description suggestion, not a guaranteed snippet.
- `ogImage`: an optional **Open Graph image** used as the preview picture when someone shares an article link in apps such as Facebook, Messenger, WhatsApp, or other social platforms. It is not the article's main image itself; it tells link-preview crawlers which image to show. Use a full public HTTPS URL, for example `https://your-real-domain.com/assets/donation-preparation.jpg`. The image must load without signing in. A wide image around 1200 × 630 pixels is a useful general choice. If you leave `ogImage` empty, this website falls back to the article's `image`, then to the site's default image. `ogImage` is optional for the site to work, but recommended if you want a deliberate, attractive share preview. Social apps may cache previews, and some crawlers may not read JavaScript-generated article metadata; see Section 9 for the limitation and testing advice.
- `body.en` and `body.bn`: article content for both languages. Supported block types include `heading` + `paragraphs`, `heading` + `bullets`, and `callout`.

### Article URL — how it works, and where to change your website address

Each article uses the same `blog.html` template. The article is identified by its unique `slug`, so the URL looks like this:

`https://YOUR-SITE-URL/blog.html?slug=healthy-donation-preparation`

You **do not** make a separate HTML file for every article, and you **do not** need to change the URL inside every article object.

#### Set the base website URL in one place

1. Open `js/config.js`.
2. Find this line:

   ```js
   siteUrl: "https://bloodlink-team.github.io/BloodLink-Blog-Page",
   ```
3. Replace only the URL inside the quotes with your real public website's base URL, then save.

Examples:

- If your site opens at `https://bloodlink-team.github.io/BloodLink-Blog-Page/`, use `siteUrl: "https://bloodlink-team.github.io/BloodLink-Blog-Page"`.
- If it opens at `https://bloodlink-team.github.io/BloodLink-Blog-Page/bloodlink-blog/`, use `siteUrl: "https://bloodlink-team.github.io/BloodLink-Blog-Page/bloodlink-blog"` (include the repository subpath).
- If you use a custom domain such as `https://blog.example.com/`, use `siteUrl: "https://blog.example.com"`.

Do not add `blog.html` or a slug to `siteUrl`; it should be the base address only, without a trailing slash. The app uses this setting to build the absolute article canonical URL and metadata URL. The links between the homepage and articles are relative links, so you don't have to edit each card or article when the domain changes.

#### What still needs updating after a domain or repository-path change?

Some files are static and cannot automatically update themselves from `config.js`. After changing your public address, update these **one-time website-wide settings**:

- `sitemap.xml`: change the domain/path in every `<loc>` URL.
- `robots.txt`: change the `Sitemap:` URL.
- `index.html`, `blog.html`, `privacy.html`, and `404.html`: update their default canonical/Open Graph URLs and any absolute asset URLs if present.
- Google Search Console: verify the correct public property and submit the sitemap again if needed.
- Google Analytics: confirm the web data stream website URL is correct.

You do **not** have to edit these files every time you publish a new article. Only update the sitemap when adding/removing article URLs, and update static metadata when the site's base address changes.

#### Example of a final article URL

If your site base is `https://bloodlink-team.github.io/BloodLink-Blog-Page` and the article slug is `healthy-donation-preparation`, the URL is:

`https://bloodlink-team.github.io/BloodLink-Blog-Page/blog.html?slug=healthy-donation-preparation`

If your site is published in a repository subfolder, include that folder in the base URL. Always copy the real address from the browser after the site is deployed and test it in a private/incognito tab.

### Edit a blog

Find the object with the matching `slug` in `js/articles.js`, then change its title, excerpt, date, image, metadata, or body. Keep the slug the same if you want to preserve its existing link.

### Remove a blog

Remove that article object from the `blogs` array, taking care not to delete a comma or bracket that belongs to another article. Then remove its URL from `sitemap.xml` if that URL is listed there. If the article was already indexed or shared, consider leaving a useful replacement page or redirect if your hosting setup supports it.

### Health information quality

Blood donation eligibility and medical decisions vary by person and location. Use reputable sources, cite them in articles where appropriate, and have medical claims checked by qualified healthcare professionals. The blog is educational and must not replace professional medical advice.

### Easier publishing: use the article template file

You do not need to write the HTML for each article. Follow this routine every time:

1. Open `ARTICLE-TEMPLATE.js` in a code editor.
2. Copy the complete object between the outer `{` and `}` (do not copy the explanatory comment at the top).
3. Open `js/articles.js` and find the `window.BLOODLINK_BLOGS = [` list.
4. Paste the copied object before the final closing `];`. Add a comma after the previous article object if it does not already have one.
5. Replace the sample `slug`, title, category, date, image, alt text, excerpt, metadata, and article body in both English and Bangla.
6. Save the file, preview the homepage, search for a phrase from the new article, and open its article link.
7. Add its URL to `sitemap.xml`, then upload all changed files to GitHub.

**Important:** `ARTICLE-TEMPLATE.js` is a starter template, not a published article and not a file that the website loads. The live website automatically displays objects added to `js/articles.js`. This is how a static GitHub Pages site works without a server or database.

You can use these block types in `body.en` and `body.bn`:

```js
{ heading: "Section heading", paragraphs: ["Paragraph one.", "Paragraph two."] }
{ heading: "Key points", bullets: ["First point", "Second point"] }
{ callout: "Important highlighted note." }
```

Use a unique slug such as `how-to-help-a-donor`. Do not use spaces, uppercase letters, or reuse another article's slug. Put the image file in `assets/` and make sure the image path and alt text are correct.

## 5. Images and accessible alt text

### Add an image

1. Put your image in `assets/`, for example `assets/donation-preparation.jpg`.
2. In the article object, set `image: "assets/donation-preparation.jpg"`.
3. Add meaningful `imageAlt.en` and `imageAlt.bn` text.
4. Check that the image loads on the live site.

Use images you own or have permission to publish. Compress large images before uploading so the mobile site loads faster. Use descriptive file names such as `blood-donation-centre.jpg`, not `IMG_001.jpg`.

### What makes good alt text?

Alt text should explain the meaningful information in the image, especially for visitors using screen readers or when an image fails to load.

Good: `alt: "A healthcare worker preparing a blood donation kit"`

Avoid: `alt: "blood donation blood donor best blood donation Bangladesh BloodLink"`.

Decorative images should use empty alt text (`alt=""`) when appropriate. Logos should have concise alt text such as `BloodLink logo`. When adding a new image directly to HTML, include an `alt` attribute.

## Desktop article layout (three cards per row)

On screens wider than 760px, the homepage and related-article sections display **three article cards per row**. Each card places its image above the title and metadata, matching the BloodLink Journal card style. Article images use a consistent 16:9 ratio. On phones, cards remain in a single column for comfortable reading.

To change the desktop column count later, open `css/style.css` and search for `Desktop article layout: exactly three cards per row`. Change `repeat(3, minmax(0, 1fr))` to `repeat(2, minmax(0, 1fr))` for two columns, or another number if desired. Keep the mobile rules below it unchanged unless you also want to change the phone layout.

## 6. Change the logo, colors, and page text

### Change the logo

Replace `assets/bloodlink-logo.png` with your new square PNG, keeping the same file name. Check that the logo still looks clear in the header and on mobile.

### Change theme colors and layout

Open `css/style.css`. Search for the existing red color (commonly `#c90012`) and change it carefully wherever it appears. The stylesheet controls the header, buttons, cards, borders, spacing, typography, responsive layout, and loading indicators. Make a backup before changing many values.

### Change homepage text and translations

Open `js/app.js` and find the `copy` object. The `en` section contains English interface text; the `bn` section contains Bangla text. Edit the values, but keep each property/key name unchanged. For example, edit `heading`, `intro`, `heroNote`, `aboutTitle`, `aboutText`, and `footerText` in both language sections.

### Change the website's main settings

Open `js/config.js`. Current settings include:

```js
siteName: "BloodLink Blog",
siteUrl: "https://bloodlink-team.github.io/BloodLink-Blog-Page",
ogImage: "https://bloodlink-team.github.io/BloodLink-Blog-Page/assets/bloodlink-logo.png",
googleAnalyticsId: "G-XXXXXXXXXX",
reportEmail: "bloodlink@example.com",
defaultLanguage: "en",
```

Change these to the real deployed website URL, public share image, Google Analytics Measurement ID, and support email. Keep the quotes and commas. Analytics is loaded by `js/analytics.js` from this single setting; you do not need to edit every HTML page.

### What are `siteUrl` and `ogImage`?

- **`siteUrl`** is the base public address of your website. Set it once in `js/config.js`. The code uses it to construct canonical and article metadata URLs. Do not put a particular article's slug in this setting.
- **`ogImage`** is the default image used for social link previews when sharing the homepage or an article without its own `ogImage`. It should be a public, absolute HTTPS URL. It does not create or upload the image: you must put the image in `assets/` and point to its public URL. For an article-specific preview, set `ogImage` on that article in `js/articles.js`. If omitted/empty, the article image is used as a fallback.

You normally change `siteUrl` only if the website's domain or repository path changes, not when adding an article. For every new article, give it a unique `slug`; the URL is built automatically from the base URL and that slug. The sitemap is a separate static file, however, so add the new article URL to `sitemap.xml` as explained in Section 10.

## 7. Edit the three-line menu

The menu is the panel opened by the three-line button at the top left. The links appear in both `index.html` and `blog.html`.

- **Home:** takes visitors to the homepage.
- **All blogs:** goes to the article list.
- **About BloodLink Blog:** goes to the About section on the homepage.
- **Language:** switches between English and Bangla.
- **Report a problem:** opens the visitor's email app.
- **Share this website:** opens the browser/device share sheet where supported; otherwise, it uses the site's fallback behaviour.

### Change the Share link

Open `js/app.js`, find `initMenu()` and the share button handler. If you see:

```js
const url = location.href;
```

the current page URL is shared. To always share the homepage, use:

```js
const url = "https://YOUR-REAL-DOMAIN/";
```

Use your real deployed homepage URL, including any repository subpath if applicable. Keep `location.href` if sharing the current article URL is preferred.

### Change the About BloodLink Blog text

In `js/app.js`, edit `aboutTitle` and `aboutText` in both `copy.en` and `copy.bn`. The About section's layout is in `index.html`; its styling is in `css/style.css`. If you want to remove the entire About section, remove its HTML section and any menu/footer links that point to it.

### Change the report email

Replace the placeholder `bloodlink@example.com` with your real support address in the Report a problem link in **both** `index.html` and `blog.html`. Also set `reportEmail` in `js/config.js` to the same address if the application uses that setting. A `mailto:` link only opens an email draft; it does not deliver or store a report automatically.

### Add/remove menu links

Edit the `<nav class="menu-links">` block in both `index.html` and `blog.html`. Update both copies to keep the menu consistent. Check that every link points to an existing page or section.

## 8. SEO basics and metadata

SEO helps search engines understand your pages; it cannot guarantee ranking or indexing.

### What is already included?

- A page title and meta description in the HTML.
- Canonical URL on pages where configured.
- Open Graph and Twitter card metadata on the homepage and static pages.
- Article-specific metadata updated by the JavaScript article renderer.
- `sitemap.xml` and `robots.txt`.
- A custom `404.html`.

### Homepage metadata

Open `index.html`. In the `<head>` section, edit:

```html
<title>BloodLink Blog | Donate Blood, Save Lives</title>
<meta name="description" content="A clear, accurate summary of the homepage.">
<link rel="canonical" href="https://YOUR-REAL-DOMAIN/">
```

Use a unique title and natural summary that accurately describe the page. Do not repeat keywords unnaturally. The canonical URL should be the preferred public URL, not a local `file:///` path or preview URL.

### Article metadata

For each article, add `metaDescription.en` and `metaDescription.bn` in its object in `js/articles.js`. Also add `ogImage` if you want a particular social preview image. The article renderer sets metadata in the browser for the selected article.

**Important technical limitation:** Because all article URLs share `blog.html` and article metadata is set by JavaScript after page load, some search/social crawlers may only see the generic initial `blog.html` metadata. If you need reliably unique metadata for every article in every crawler, use a build process that generates a separate static HTML file per article or move to a server-rendered/static-site generator setup. Search Console URL inspection can help you see what Google can render, but it does not guarantee that every crawler behaves the same way.

### Canonical URL

A canonical tag tells search engines which URL is the preferred version of a page. Keep it accurate. If you change domain or move the website into a repository subfolder, update canonical URLs accordingly. Avoid accidentally making all article pages canonical to the homepage.

### Content practices that help

- Give each article a specific, useful title.
- Write original, genuinely helpful content.
- Use descriptive headings and short paragraphs.
- Link related articles to one another.
- Use relevant image alt text.
- Make the site work well on mobile and load quickly.
- Correct factual errors and update outdated content.
- Do not buy links, copy articles, or stuff keywords.
- Search engines decide whether and how to index pages; a sitemap is a discovery hint, not a guarantee.

## 9. Open Graph/social sharing previews

Open Graph metadata helps apps such as Facebook and Messenger create a preview with a title, description, and image when a URL is shared. The Twitter/X card metadata serves a similar purpose.

### Choose an image

1. Create a clean BloodLink-branded preview image. A wide image around **1200 × 630 pixels** is a useful general target.
2. Upload it to a public location, for example `assets/bloodlink-social.jpg`.
3. Use the full absolute HTTPS URL in the metadata, for example `https://YOUR-REAL-DOMAIN/assets/bloodlink-social.jpg`.
4. Upload the image to `assets/` and set `ogImage` in `js/config.js` to its full public HTTPS URL. Update the default `og:image` / `twitter:image` tags in the static HTML files as well, so they have a good fallback before JavaScript runs.
5. For individual articles, set that article's `ogImage` in `js/articles.js`. This is optional: when empty, the article's main `image` is used as the fallback.

The image must be publicly accessible without login. A local computer path will not work for visitors or crawlers. Some social platforms cache previews, so changes may take time to appear.

### Test a share preview

After publishing, share the real public URL in a private test message or use the platform's current official preview/debug tool if available. Test the homepage and article URL separately. If the article preview still shows the generic page metadata, that is the JavaScript-rendering limitation described above; use generated per-article HTML for the most reliable result.

## 10. Sitemap and robots.txt

`sitemap.xml` and the RSS feed `feed.xml` are **generated automatically**. When you add, edit, publish or unpublish an article in Pages CMS, the CMS commits `content/articles.json`. That commit starts the GitHub Action in `.github/workflows/update-sitemap.yml`, which runs `scripts/generate-sitemap.mjs`, commits the new `sitemap.xml` and `feed.xml` and asks GitHub Pages to redeploy. It usually finishes within a minute or two.

- Only articles with status **Published** are listed. Drafts never appear.
- Each article gets a `lastmod` date from its publication date. The home page and `articles.html` use the newest article date.
- To run it yourself: `node scripts/generate-sitemap.mjs`, then commit `sitemap.xml`.
- The workflow needs the project folder to be the **root** of the repository, and under **Settings → Actions → General → Workflow permissions** choose "Read and write permissions".
- If you change `siteUrl` in `js/config.js`, the next run updates every sitemap URL. `robots.txt` still needs its `Sitemap:` line edited by hand.
- After the first publish, submit `https://bloodlink-team.github.io/BloodLink-Blog-Page/sitemap.xml` once in Google Search Console. Google then re-reads it by itself.

## 11. Google Search Console

Search Console is free and helps you monitor Google Search discovery, indexing, and search performance. It is different from Google Analytics.

1. Open the official Google Search Console website: https://search.google.com/search-console/
2. Sign in with the Google account you want to use to manage the site.
3. Choose the property type:
   - **URL prefix** is often simpler for a GitHub Pages URL.
   - **Domain** property covers a whole domain and usually requires DNS verification; use it if you control the domain and can change its DNS records.
4. Enter the exact public website URL, including `https://` and any repository subpath where applicable.
5. Follow Google's verification instructions. Use the method available for your property. If using an HTML verification file, upload it to the exact published root Google specifies and keep it there. If using a meta tag, put the exact supplied tag in the homepage `<head>`. Do not invent a verification code.
6. After verification, open **Sitemaps**, submit your sitemap, and check its status.
7. Use **URL Inspection** to test the homepage and important article URLs. Request indexing when offered, but remember Google decides when or whether to index.
8. Check **Pages/Indexing** for errors, **Core Web Vitals** when data is available, and **Performance → Search results** for impressions, clicks, search queries, and average position.
9. Revisit periodically. A new site may take time to appear in Google.

If verification fails, check that the property URL exactly matches the deployed URL and that the verification file/tag is actually live. GitHub Pages does not require a special sitemap plugin; the `sitemap.xml` file is served as a normal static file.

Official help: https://support.google.com/webmasters/

## 12. Google Analytics 4

Google Analytics (GA4) measures website usage, such as visits and page views. **The default ID is a placeholder (`G-XXXXXXXXXX`), so tracking remains off until you replace it with your own Measurement ID in `js/config.js`.** Do not use someone else's Analytics ID.

### A. Create an Analytics account and property

1. Open https://analytics.google.com/.
2. Sign in with the Google account that should own the site's analytics.
3. Open **Admin** (gear icon).
4. If you do not have an Analytics account, create one and follow the setup prompts.
5. Create a GA4 property named something like `BloodLink Blog`. Select the reporting time zone and currency appropriate for your reporting needs.
6. Create a **Web** data stream.
7. Enter your real website URL, such as `https://YOUR-REAL-DOMAIN/`, and name the stream `BloodLink Blog`.
8. Finish setup and open the web data stream details.
9. Copy the **Measurement ID**. It looks like `G-ABC123DE45`. This ID is not a password, but only use the ID from your own property.

Google's setup instructions can change: https://support.google.com/analytics/

### B. Add the Measurement ID to this project

Analytics is configured once in `js/config.js` and loaded by `js/analytics.js` on the homepage, article page, and privacy page. The standalone 404 page does not load Analytics.

Open `js/config.js` and replace only this value with your own ID:

```js
googleAnalyticsId: "G-ABC1234567",
```

Use the exact Measurement ID shown in your GA4 Web data stream. `js/analytics.js` loads the Google script on the homepage, article page, and privacy page only when the ID has the expected format and is not the placeholder. You do not need to edit each HTML page. The custom 404 page deliberately does not load Analytics so its standalone error screen stays lightweight.

Save `js/config.js`, commit the changes, and publish the website. No other file needs its own Measurement ID.

### C. Test Analytics

1. Open the public website in a new browser tab.
2. Accept or configure any consent choice if you have added a consent tool; do not assume consent handling is automatically included by this starter site.
3. In Analytics, open **Reports → Realtime**.
4. Visit the homepage and an article page. It may take a short while for activity to appear.
5. If no visit appears, check that the ID was replaced in all four files, the live deployment finished, your browser is not blocking Analytics, and the URL matches the configured web stream.
6. Use the browser developer tools/network panel on a computer if you are comfortable doing so, or follow Google's troubleshooting help.

Analytics data can be delayed and may be affected by ad blockers, privacy settings, consent requirements, and browser restrictions. Do not use a single missing realtime visit as proof that all tracking is broken.

### D. Understand the reports

- **Realtime:** activity happening recently.
- **Reports / Acquisition:** how visitors found the site, when those reports are available.
- **Engagement:** pages and screens, events, and engagement metrics.
- **Landing pages:** which pages visitors enter through, when available.
- **Events:** interactions GA4 records. The starter integration mainly provides standard page-view tracking; custom events for searches, language switching, and share clicks are not configured automatically.

Analytics shows aggregated usage, not a list of every visitor's identity. Do not attempt to collect unnecessary personal or sensitive information.

### E. Privacy and consent responsibilities

Before enabling Analytics for the public, review applicable privacy and cookie requirements for your visitors and hosting context. Update `privacy.html` to accurately explain the analytics provider, the information collected, purposes, retention/settings where relevant, and contact details. If your legal obligations or audience require consent before non-essential analytics, implement a suitable consent mechanism and ensure Analytics does not run before consent where required. This starter site does **not** include a full consent-management platform or legal review.

Never claim the site does not use analytics after you have enabled GA4. Keep the privacy policy aligned with the actual implementation.

## 13. 404 page and privacy policy

### Custom 404 page and offline game

`404.html` is the themed error page for visitors who request a page that does not exist. GitHub Pages serves a root `404.html` for missing pages. Test it after publishing by opening a made-up path such as `https://YOUR-REAL-DOMAIN/this-page-should-not-exist`. Some local preview servers may show their own error page instead.

The 404 page includes one small offline game: **BloodLink Rescue Rush**. Move the basket with the on-screen left/right buttons (shown on phones), the keyboard arrow keys or by dragging, catch red drops for points, and avoid green sample-warning markers. It runs locally in the browser without a game library and does not upload scores. Test the game on both mobile and desktop after publishing.

### Privacy policy

Open `privacy.html` to edit the policy. Update the website name, support contact, analytics description, and any statements about cookies or collected information so they match the actual site. If you add forms, comments, accounts, advertising, embedded videos, or other third-party services later, update the policy accordingly.

A starter privacy page is not legal advice and may not satisfy every legal requirement. Review it for the countries and audience your website serves.

## 14. Loading states and troubleshooting

### Loading states

The article renderer includes a loading status while content is prepared. Test with a normal article and a slug that does not exist. A missing article should show a not-found message rather than an endless spinner.

### Search bar behavior

The search field filters articles as the visitor types. It searches article titles, summaries, categories, slugs, metadata, and article text in both languages. The × button clears the query; on a keyboard, Escape clears it too. If search results seem wrong, check that the article text is present in `js/articles.js`, then refresh the published page after deployment.

### Common issues

**Article is missing from the homepage**
- Check that its object is inside `window.BLOODLINK_BLOGS` in `js/articles.js`.
- Check commas, quotes, braces, and brackets.
- Check that the browser console has no JavaScript errors.

**Article link opens “Article not found”**
- Ensure the URL slug matches the article's `slug` exactly.
- Check that both `js/config.js` and `js/articles.js` load and the URL uses the correct deployment path.

**Image is broken**
- Check the spelling and capitalization of the filename.
- Confirm the file is uploaded to `assets/`.
- Check the full URL for remote images and confirm they are publicly accessible.

**English/Bangla text does not change**
- Check that both language values exist.
- Keep translation keys unchanged in `js/app.js`.
- Check that the language buttons and JavaScript load.

**Website works locally but not on GitHub Pages**
- Check that every referenced file was uploaded.
- File and folder names are case-sensitive on hosting.
- Check whether the repository uses a subpath.
- Confirm the latest deployment succeeded.

**Google does not show the website yet**
- Verify the site in Search Console.
- Submit `sitemap.xml`.
- Check URL Inspection and indexing reports.
- Ensure pages are public and not accidentally blocked.
- Wait; indexing is not instant or guaranteed.

**Analytics shows no visitors**
- Replace the placeholder ID in all four HTML pages and `js/config.js`.
- Confirm you are checking the matching GA4 property.
- Check privacy/consent settings, browser blockers, and the deployed source.

### Brand size and search-bar design

The homepage hero logo and title are intentionally smaller on mobile, with reduced vertical spacing. The search bar is a single clean white field with a simple red magnifier, focus styling, and a clear button. These refinements live at the end of `css/style.css`; keep the final override block when editing the stylesheet. The search JavaScript in `js/app.js` searches article bodies as well as titles and summaries.

## 15. Before every release checklist

Use this list before publishing a change:

- [ ] I made a backup or can restore the previous version.
- [ ] Homepage works on mobile and desktop.
- [ ] All article links open the correct article.
- [ ] Search, categories, menu, sharing, and language toggle work.
- [ ] New images load and have useful alt text.
- [ ] Article titles, dates, English/Bangla content, and meta descriptions are correct.
- [ ] The canonical and social preview URLs use the real public domain.
- [ ] `sitemap.xml` includes new public articles and excludes removed ones.
- [ ] `robots.txt` points to the correct sitemap URL.
- [ ] Google Analytics Measurement ID is correct in `js/config.js`; `js/analytics.js` is included on the homepage, article page, and privacy page.
- [ ] Privacy policy reflects the actual analytics and data practices.
- [ ] The custom 404 page works on the deployed host.
- [ ] Changes are uploaded and the live website has been tested.

## 16. Useful official resources

- Google Analytics: https://analytics.google.com/
- Analytics Help: https://support.google.com/analytics/
- Google Search Console: https://search.google.com/search-console/
- Search Console Help: https://support.google.com/webmasters/
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitemaps overview: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Robots.txt overview: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Open Graph protocol: https://ogp.me/
- GitHub Pages documentation: https://docs.github.com/pages

---

**Owner's rule:** If you change the public domain, update `siteUrl` and `ogImage` in `js/config.js`, the canonical and social metadata in the HTML files, every URL in `sitemap.xml`, the sitemap address in `robots.txt`, and the URL configured in Google Analytics/Search Console.


## 17. 404 page: one game, navigation, and troubleshooting

`404.html` is self-contained for styling and logo display, so it does not depend on the shared stylesheet. It includes **one game only**, BloodLink Rescue Rush, using the website's red, white, pale-blue, and green palette. The game is local to the browser; scores are not uploaded.

### Navigation on the 404 page

- The arrow at the top left uses browser history when the visitor came from the same site; when opened directly, it falls back to the homepage.
- **Back to BloodLink Blog** is the main homepage action.
- **Privacy Policy** is in the footer.
- The extra Home button was removed to avoid duplicate homepage actions.

The current public site is expected at `https://bloodlink-team.github.io/BloodLink-Blog-Page/`, so its base path is the domain root. If you later publish under a project subfolder such as `https://username.github.io/repository-name/`, update the `MANUAL_BASE_PATH` constant in `404.html` and test the links again.

### Test after publishing

1. Confirm `404.html` is beside `index.html` in the published root.
2. Open a made-up URL on the live site.
3. Confirm the logo and styling appear.
4. Test the top-left arrow, the main red homepage button, and Privacy Policy.
5. Start Rescue Rush; try the on-screen controls on a phone and arrow keys on a computer.
6. On desktop, inspect DevTools → Network to check that the missing document returns HTTP 404.

## 18. Final UI, mobile and security checklist

### Article preview design

Article cards use a medium preview: title is limited to two lines, summary is clamped to three lines, metadata is compact, and the Read article link stays near the bottom. On narrow phones, cards become a compact horizontal layout so the list remains scannable. Full article content is still available after opening an article. If you want longer or shorter previews, edit `.card-title` and `.card-excerpt` rules near the end of `css/style.css`.

### Google Analytics safety

`js/analytics.js` loads Google Analytics only when `googleAnalyticsId` in `js/config.js` is changed from `G-XXXXXXXXXX` to a real GA4 ID. With the placeholder unchanged, the site does not request the Analytics script. Update `privacy.html` to describe Analytics accurately before enabling it, and add a consent mechanism if your legal obligations require one.

### Security notes and limits

- This is a static website. Do not put passwords, private API keys, donor records, or other secrets in HTML/JavaScript; every published file is public.
- Article text is HTML-escaped before rendering. Only add article content you trust, and never paste raw HTML or executable JavaScript into article data.
- Use HTTPS image URLs or local files inside `assets/`. Avoid unknown third-party scripts and untrusted embeds.
- Keep GitHub account two-factor authentication enabled and review repository collaborators before publishing.
- Do not collect health information or donor contact information through this blog unless you have a secure, properly reviewed system and a clear privacy/legal basis.
- Keep the privacy policy consistent with actual services (Analytics, contact links, embeds, forms). A template is not legal advice.
- The project has been checked for common local syntax and UI issues, but no automated check can guarantee the whole site is bug-free or legally compliant. Test the deployed site on real devices and inspect browser Console/Network after every release.

### Release test checklist

1. Open the homepage on a narrow phone and a desktop browser; check for horizontal scrolling.
2. Search for an existing title and a phrase that should return no results; clear with the × button and Escape.
3. Open every article, test English/Bangla switching, and verify image alt text.
4. Test the menu, share action, report link, footer, and privacy page.
5. Open a fake URL and confirm the custom 404 styling, browser-back behavior, homepage button, Privacy Policy link, and the single Rescue Rush game.
6. With the GA placeholder, confirm no request to `googletagmanager.com` occurs. If Analytics is enabled, verify the ID and test in GA4 Realtime.
7. Check that `sitemap.xml` contains only real public pages and that `robots.txt` points to the correct sitemap.
8. Wait for GitHub Pages deployment, then hard-refresh and test the public website.

---

## Homepage visual design (November 2026 refresh)

The homepage now follows the BloodLink Journal reference design: a solid red compact header, left-aligned logo and wordmark, warm off-white/pale-pink background, large editorial headline, slim red-outline search field, and a prominent featured article card.

### Where to edit the homepage appearance

- `index.html` controls the homepage structure: header, brand block, headline, search field, and article-list heading.
- `css/style.css` contains the visual theme and responsive rules. The section titled `BloodLink Journal visual refresh` is the final homepage override layer. Edit these rules to adjust spacing, colors, type sizes, and card layout.
- `js/app.js` contains the English and Bangla homepage wording. Search for the `copy` object and edit the `heading`, `intro`, `latest`, and `tagline` values in both language sections.
- `js/articles.js` controls article content, images, category labels, dates, and summaries. The first article in the list is displayed as the featured lead card; newer articles are ordered by date in the app.

### Featured article card

The newest article is displayed as the large featured card. Its image is shown prominently, followed by category, publication date, reading time, title, a short excerpt, and the Read article link. Other articles use smaller cards. To change the featured story, update article dates in `js/articles.js`; do not manually duplicate the article in `index.html`.

### Search field

The search input remains connected to `js/app.js`. It searches article title, excerpt, category, slug, metadata description, and body text. The red-outline style is in the `BloodLink Journal visual refresh` section of `css/style.css`. Do not remove the `searchInput` or `clearSearch` IDs from `index.html`, because the search JavaScript uses them.

### Responsive layout

The CSS uses breakpoints for desktop, tablet/mobile, and narrow phones. On mobile, the featured article stays image-first and full-width, while secondary articles become compact horizontal previews. On wider screens, the featured card uses a side-by-side image and text layout. Test at least one narrow phone width and one desktop width after changing layout rules.

### After replacing the homepage files

If you are updating an existing GitHub Pages repository, upload the complete project contents and preserve the folder structure. At minimum, this visual refresh changes `index.html`, `css/style.css`, `js/app.js`, and this README. Keep `js/articles.js`, `js/config.js`, `js/analytics.js`, `blog.html`, `404.html`, `privacy.html`, `assets/`, `robots.txt`, and `sitemap.xml` from the same project version. Clear the browser cache or use a private tab if the old CSS remains visible.


## Article card design (all articles use the same layout)

Every article preview now uses the same full editorial card style as the featured article: a large 16:9 image, category/date/read-time metadata, prominent title, and a Read article link. The short excerpt/summary is intentionally hidden on listing cards to keep the homepage clean. The excerpt remains in `js/articles.js` for search, SEO descriptions, and article-page metadata; do not delete it.

On phones, cards stack image above the text. On desktop, cards use a wide image-and-content layout. The same card design is used for related articles. To change the card appearance globally, edit the final `Journal article cards` section at the bottom of `css/style.css`; avoid adding per-article inline styles.

### Compact article preview sizing (16:9 images)

The article listing cards use a compact, consistent layout. Every preview image is locked to a **16:9 aspect ratio** with `object-fit: cover`, so images keep the same shape on phones, tablets, desktop, featured articles, and related articles. The image height is calculated from its available width rather than using a large fixed height.

- On desktop, article cards appear in a two-column grid to reduce excessive page length.
- On phones, cards use one column, with the image above the text.
- Card padding, title size, metadata spacing, and line height are reduced for a tighter preview.
- Excerpts remain hidden on preview cards; they are still retained in `js/articles.js` for search and SEO.

To adjust this design later, edit the final **Compact journal cards** section at the bottom of `css/style.css`. Keep `aspect-ratio:16/9` on `.card-image` and avoid adding fixed image heights or desktop side-by-side image layouts, as those would break the consistent image ratio.


## Homepage spacing: keep articles visible sooner

The homepage is intentionally compact above the search bar so visitors can reach the articles without scrolling through a large logo or oversized introduction. The relevant styles are grouped at the **end** of `css/style.css` under `Above-the-fold homepage refinement`. Keep this block at the end because it overrides older design rules earlier in the stylesheet.

You can safely adjust these values:

- `.hero-logo-image` controls the homepage logo size (currently 48px on desktop and 42px on phones).
- `.hero h1` controls the BloodLink title size.
- `.tagline` controls the small Donate Blood, Save Lives line.
- `.welcome-row` controls the spacing around the journal headline and intro.
- `.section-intro` controls the intro text size and line spacing.
- `.search-box` controls the search bar height.
- `.search-panel` controls the gap between search and the article heading.

For a more compact homepage, reduce the padding or margins slightly; avoid setting the logo or heading to zero, as the brand should remain visible. Check the page at phone widths (360–430px) and desktop widths after every change. The goal is for the featured/article heading and at least the beginning of the first article card to appear much sooner on a typical phone screen.


## Phone opening position and desktop alignment

The homepage disables browser scroll-position restoration on a fresh open so visitors start at the top instead of unexpectedly landing halfway down the page. Explicit in-page links (for example `#latest`) are still allowed to navigate to their requested section. The CSS also uses normal, non-smooth initial scrolling.

On desktop widths (above 760px), the main page container, logo/title block, introduction, search field, section heading, and article grid are left-aligned with a consistent left margin. On phones, the existing compact responsive layout remains in effect.

If a phone still opens partway down the page, check that the browser is not restoring an existing tab session; close the old tab and open the site in a new tab or private window to test a fresh visit.


## Desktop article width and three-column layout

On screens wider than 760px, the article list and related articles display three cards per row. The content container now expands up to 1560px and is centred, so the cards use more of the available desktop width instead of leaving a large blank area on the right. Each card keeps a 16:9 image. On smaller screens, the existing responsive one-column/two-column rules remain in effect.

To adjust this later, edit the desktop `.page-shell` rule and the `.blog-grid, .related-grid` rule near the end of `css/style.css`. Keep `repeat(3, minmax(0, 1fr))` for three desktop columns and `aspect-ratio: 16 / 9` for article images.


---

## 17. The game on the 404 page

The custom `404.html` is built around one game, **BloodLink Rescue Rush**, in the same spirit as the dinosaur game in Chrome. Press Space (or tap) to start, move the basket with the arrow keys or by dragging, catch red drops for +10 and avoid green germs, which cost a life. It has no timer and ends when all three lives are lost. The Blood Group Match game was removed. The score and sound setting stay in the visitor's browser and are never uploaded.

The game can work when the visitor is offline **after the website has been opened online at least once and the service worker has successfully installed**. A first-time visitor with no network cannot download a website they have never cached.

## 18. Offline fallback and automatic website updates

`sw.js` caches the website shell and the self-contained 404 page. When the network is unavailable, a navigation can fall back to the cached 404 page, where the two games remain playable. When the network is available, page, CSS, JavaScript, and image requests use a network-first strategy so visitors receive the current published design rather than an old cached copy. A new service-worker version removes the previous BloodLink cache during activation.

Important:
- Service workers require HTTPS; GitHub Pages provides HTTPS on its published site.
- After uploading this release, open the site online once on each phone/browser to install the updated service worker.
- If a visitor never opens the site online, no offline copy can exist on that device.
- Browser storage can be cleared by the user or operating system, so offline availability cannot be guaranteed forever.
- The 404 page is a branded offline fallback, not a replacement for the real browser-level “no internet” screen in every browser.

## 19. Publish articles with Pages CMS

The site now uses Pages CMS with a single JSON article collection at `content/articles.json`. Open https://app.pagescms.org/, sign in with GitHub, authorize only the BloodLink repository, and edit the **Blog articles** collection. The `.pages.yml` configuration is in the repository root.

New entries default to **Draft**. The website only renders entries with `status: "published"`. Existing posts were migrated as Published, with their slugs and bilingual content preserved. See the detailed Pages CMS integration guide at the end of this README for field-by-field instructions, image handling, SEO, URL preservation, and troubleshooting.

English and Bangla content are arranged in separate labelled language sections. Pages CMS configuration supports grouped object fields; it does not provide a guaranteed literal tabbed interface for arbitrary field groups, so these are distinct editor panels rather than custom tab buttons.

## 20. Security and release review notes

This is a static-site code review, not a penetration test or a guarantee that the hosting account, GitHub account, DNS, or third-party services are secure.

- The current project does not contain a login system, payment processing, or server-side database. Do not add passwords, private donor records, patient details, or API secrets to public JavaScript files.
- Article text is escaped before being inserted into generated HTML. Keep this escaping in place when changing rendering code.
- Only publish images from trusted sources. Do not allow article authors to enter arbitrary HTML or JavaScript into article fields.
- Use HTTPS for the live site and enable two-factor authentication on the GitHub account.
- Keep report email addresses public only if you intend visitors to contact them.
- Review third-party image hosts and Google Analytics settings for their privacy implications.
- Re-run link, HTML, JavaScript, responsive, and offline checks after changing site structure.


# Pages CMS integration (bilingual, draft-first)

## What changed

- Added `.pages.yml` at the repository root for Pages CMS.
- Migrated the three existing articles into `content/articles.json` without changing their slugs, bilingual text, dates, featured images, alt text, categories, or existing `blog.html?slug=...` URLs. Existing articles remain **published** so the live site does not lose content.
- The website now loads that JSON file and displays only entries whose `status` is `published`. Drafts remain in the repository/CMS but are excluded from the homepage, search, related articles, and article lookup.
- New article records have `status: draft` as the CMS field default. Change status to Published only after both language versions and the image/SEO fields are ready.
- English and Bangla fields are grouped under two separate language panels (`ENGLISH VERSION` and `বাংলা সংস্করণ`). Pages CMS currently exposes these as grouped object sections, not guaranteed literal tab buttons; the two language areas are separate and clearly labelled.
- Uploaded images are stored in `assets/uploads/blog/`. The website uses the existing article card/hero image CSS and preserves the existing page design.
- Existing article URLs remain unchanged as long as you do not change their `slug`.

## Connect Pages CMS

1. Push this entire project folder to the same GitHub repository that publishes the website. Keep `.pages.yml` in the repository root (next to `index.html`).
2. Open https://app.pagescms.org/ and sign in with GitHub.
3. Install/authorize the Pages CMS GitHub App for the account that owns the BloodLink repository. Grant access only to the BloodLink repository if possible.
4. Select the repository and the branch that GitHub Pages deploys from.
5. Open **Blog articles**. The three migrated posts should appear.
6. Create a test article with a unique slug and keep Publishing status as **Draft**. Save it, then check the public website: the draft should not appear.
7. Complete both language sections, upload a cover image, set alt text, date and SEO fields, then change status to **Published** and save. GitHub Pages will deploy the repository changes.

Official setup guide: https://pagescms.org/docs/quick-start/

## Article editor fields

### Shared fields

- **URL slug:** lowercase English letters, numbers and hyphens. This is the URL identity. Do not change a published article's slug unless you also add a redirect.
- **Publishing status:** Draft or Published. Draft is the default for new records. Existing articles were migrated as Published.
- **Publication date** and **Reading time:** used in the article metadata.
- **Author** and **Feature on homepage:** editorial metadata.
- **Featured image:** used in the article hero and cards. Existing external image URLs were retained; new uploads go to `assets/uploads/blog/`.
- **Social sharing image:** optional Open Graph/Twitter image; if blank, the featured image is used.

### English and Bangla sections

Each language has its own category, title, short description, image alt text, full article body, SEO title and SEO description. The visitor's language switch selects the matching language. Write both versions yourself: Pages CMS does not automatically translate between them.

### Article body formatting

Use the rich-text editor for headings, paragraphs, bold/italic text, bullet lists, links and quotes. The site renderer supports Markdown headings (`##` / `###`), paragraphs, `-` bullet lists, `> ` callout quotes, bold, italic, inline code, and HTTPS links. Do not paste raw HTML or scripts.

## Images

- Recommended cover: landscape 16:9, preferably 1200×675 pixels or larger.
- Use JPG, PNG, WebP, AVIF or GIF. WebP is usually a good balance of quality and file size.
- Write meaningful English and Bangla alt text in the matching language panel.
- Keep images relevant and ensure you have permission to use them.
- CMS uploads are committed into the repository; they are public website assets, not private storage. Do not upload donor identity documents, patient records or other private information.

## SEO and URL behaviour

- The existing article URL pattern remains `blog.html?slug=your-article-slug`.
- The page dynamically updates title, description, canonical URL, Open Graph and Twitter metadata using the selected language's SEO values, falling back to title/excerpt and the article image.
- This is a static GitHub Pages website. Dynamic meta tags are added in the browser after JavaScript loads; social crawlers that do not execute JavaScript may not see per-article metadata. For stronger crawler-specific SEO, a future static pre-render/build step would be needed.
- Remember to update `sitemap.xml` when publishing a new article if you want it explicitly listed there; this integration does not automatically rewrite the sitemap.

## Important publishing workflow

1. Create a draft.
2. Add the English title, excerpt, image alt text and full article.
3. Add the Bangla equivalents and full translation.
4. Upload/select the featured image and check both alt texts.
5. Add optional language-specific SEO titles/descriptions.
6. Preview the article locally or on a staging branch if available.
7. Change status to Published and save.
8. Wait for GitHub Pages deployment, then check the homepage, both languages, article URL and social preview metadata.

**Important:** Pages CMS saves changes as GitHub commits. Draft status prevents public rendering by the BloodLink website, but it is not a private content vault: draft text and images still exist in the public GitHub repository if that repository is public. Keep sensitive content out of drafts.

## Troubleshooting

- **CMS does not show the collection:** confirm `.pages.yml` is in the repository root and the CMS app is authorized for the correct repository and branch.
- **Website shows no articles:** check that `content/articles.json` is valid JSON and that published entries contain `status: "published"`, `slug`, `english` and `bangla`.
- **Image is missing:** check that the image file exists in the repository and the saved path is relative, such as `assets/uploads/blog/example.webp`.
- **Article URL changed:** restore the old slug or add a redirect; the existing query-string URL is based on the slug.
- **Old site appears:** wait for GitHub Pages deployment and refresh after the service worker updates.

## Backups and rollback

The original `js/articles.js` has been preserved as `js/articles.legacy-backup.js` for reference. The live site no longer loads it. GitHub commit history is the primary rollback path: revert the relevant CMS commit if an edit breaks the content.


---

## Where to change things (current design)

- **Contact email:** set `reportEmail` in `js/config.js`. The menu "Report a problem" link, the footer "Contact" link and the About page all pick it up. It is still the placeholder `bloodlink@example.com`.
- **Homepage headline and intro:** `heading` and `intro` in `js/app.js` (English and Bangla blocks).
- **Footer text and the medical disclaimer:** `footerText` and `footerDisclaimer` in `js/app.js`. The footer links are in each page's `<footer>`.
- **About page text:** the `about*` keys in `js/app.js`.
- **Logo and icons:** `assets/bloodlink-logo.png` has transparent corners. Browser and phone icons are `assets/icon-*.png` and `assets/apple-touch-icon.png`. The social-share image is `assets/og-card.png` (1200 x 630).
- **Colours, type and spacing:** the variables at the top of `css/style.css`. The sections near the bottom of that file add to earlier ones, so edit the variables first.


## Live address

The site is published at `https://bloodlink-team.github.io/BloodLink-Blog-Page/` and the sitemap is `https://bloodlink-team.github.io/BloodLink-Blog-Page/sitemap.xml`. Because this is a project page, search engines only read a `robots.txt` placed at the host root (`https://bloodlink-team.github.io/robots.txt`). The one in this repo still lists the sitemap, and Google Search Console accepts the sitemap URL directly.
