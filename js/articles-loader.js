/* Loads published CMS articles from the JSON content file. */
(() => {
  const base = new URL('.', document.currentScript?.src || location.href);
  fetch(new URL('../content/articles.json', base), { cache: 'no-store' })
    .then(r => { if (!r.ok) throw new Error(`Article data request failed: ${r.status}`); return r.json(); })
    .then(items => {
      window.BLOODLINK_BLOGS = (Array.isArray(items) ? items : [])
        .filter(a => a && a.status === 'published' && a.slug && a.english && a.bangla)
        .map(a => ({
          slug:a.slug, date:a.date, readMinutes:a.readMinutes, image:a.image, ogImage:a.ogImage,
          author:a.author, featured:!!a.featured,
          category:{en:a.english.category,bn:a.bangla.category},
          title:{en:a.english.title,bn:a.bangla.title},
          excerpt:{en:a.english.excerpt,bn:a.bangla.excerpt},
          imageAlt:{en:a.english.imageAlt,bn:a.bangla.imageAlt},
          metaTitle:{en:a.english.seoTitle,bn:a.bangla.seoTitle},
          metaDescription:{en:a.english.seoDescription,bn:a.bangla.seoDescription},
          body:{en:a.english.body,bn:a.bangla.body}
        }));
      document.dispatchEvent(new Event('bloodlink:articles-ready'));
    })
    .catch(error => {
      console.error(error);
      window.BLOODLINK_BLOGS = [];
      document.dispatchEvent(new Event('bloodlink:articles-ready'));
    });
})();
