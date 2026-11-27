(() => {
  const config = window.BLOODLINK_BLOG_CONFIG || { blogs: [], defaultLanguage: "en" };
  let blogs = window.BLOODLINK_BLOGS || config.blogs || [];
  const copy = {
    en: {
      menuSubtitle:"Donate blood, save lives",home:"Home",allBlogs:"All articles",viewAll:"View all articles",allTitle:"All articles",allIntro:"Every guide in one place. Search by keyword or filter by topic",skip:"Skip to content",about:"About BloodLink Blog",
      language:"Language: English / বাংলা",report:"Report a problem",share:"Share this website",
      menuNote:"Made to help people make informed choices",tagline:"Donate blood, save lives",
      
      heading:"Give blood with confidence",intro:"Explore clear, reliable information about blood donation, from preparing for your first visit to how blood groups work",
      articles:"articles",searchPlaceholder:"Search articles",browse:"Browse by topic",
      freshReads:"Fresh reads",latest:"Latest articles",updated:"",
      noResults:"No articles found",noResultsText:"Try another keyword or choose a different topic",reset:"Reset search",
      ourPurpose:"Our purpose",aboutTitle:"Small acts, life-changing impact",
      aboutText:"BloodLink Blog shares approachable information to help people understand blood donation and support their communities. It is educational content, not a substitute for advice from a qualified healthcare professional.",
      footerText:"Donate blood. Save lives.",privacy:"Privacy policy",aboutShort:"About",contact:"Contact",shareArticle:"Share",linkCopied:"Link copied",toTop:"Back to top",footerDisclaimer:"Educational information only, not medical advice. Ask your local blood centre or a healthcare professional about your own eligibility.",aboutEyebrow:"About",aboutH1:"About BloodLink Blog",aboutLead:"A free guide to blood donation, written in English and Bangla",aboutH2a:"What we publish",aboutP1:"Practical guides for people thinking about giving blood, plain explanations of blood groups, and ways to support someone who needs blood.",aboutH2b:"How to use this information",aboutP2:"Everything here is educational. Eligibility, donation procedures and medical decisions depend on your health and local rules, so confirm them with your local blood centre or a qualified healthcare professional.",aboutH2c:"Suggest a topic or report a problem",aboutP3:"Found a mistake, or want a topic covered? Write to us at",read:"Read article",back:"Back to all articles",
      keepReading:"Keep reading",related:"Related articles",published:"Published",minRead:"min read",
      disclaimer:"Educational information only. Eligibility, donation procedures, and clinical decisions should be confirmed with a qualified healthcare professional or your local blood centre.",
      notFound:"Article not found",notFoundText:"This article may have moved or the link may be incorrect.",goHome:"Back to home",
      allTopics:"All topics",shareCopied:"Website link copied",shareUnavailable:"Copy this link to share:"
    },
    bn: {
      menuSubtitle:"রক্ত দিন, জীবন বাঁচান",home:"হোম",allBlogs:"সব প্রবন্ধ",viewAll:"সব প্রবন্ধ দেখুন",allTitle:"সব প্রবন্ধ",allIntro:"সব নির্দেশিকা এক জায়গায়। শব্দ দিয়ে খুঁজুন বা বিষয় বেছে নিন",skip:"মূল অংশে যান",about:"BloodLink Blog সম্পর্কে",
      language:"ভাষা: English / বাংলা",report:"সমস্যা জানান",share:"ওয়েবসাইট শেয়ার করুন",
      menuNote:"সচেতন সিদ্ধান্ত নিতে সাহায্য করার জন্য তৈরি",tagline:"রক্ত দিন, জীবন বাঁচান",
      
      heading:"আত্মবিশ্বাসের সঙ্গে রক্ত দিন",intro:"রক্তদান সম্পর্কে স্পষ্ট ও নির্ভরযোগ্য তথ্য জানুন, প্রথমবারের প্রস্তুতি থেকে রক্তের গ্রুপ পর্যন্ত",
      articles:"টি প্রবন্ধ",searchPlaceholder:"প্রবন্ধ খুঁজুন",browse:"বিষয় অনুযায়ী দেখুন",
      freshReads:"নতুন লেখা",latest:"সর্বশেষ প্রবন্ধ",updated:"",
      noResults:"কোনো প্রবন্ধ পাওয়া যায়নি",noResultsText:"অন্য শব্দ লিখুন বা ভিন্ন বিষয় বেছে নিন",reset:"সার্চ রিসেট করুন",
      ourPurpose:"আমাদের উদ্দেশ্য",aboutTitle:"ছোট উদ্যোগ, বড় প্রভাব।",
      aboutText:"রক্তদান বুঝতে এবং কমিউনিটিকে সহায়তা করতে BloodLink Blog সহজবোধ্য তথ্য প্রকাশ করে। এটি শিক্ষামূলক কনটেন্ট, যোগ্য স্বাস্থ্যকর্মীর পরামর্শের বিকল্প নয়।",
      footerText:"রক্ত দিন। জীবন বাঁচান।",privacy:"গোপনীয়তা নীতি",aboutShort:"সম্পর্কে",contact:"যোগাযোগ",shareArticle:"শেয়ার",linkCopied:"লিংক কপি হয়েছে",toTop:"উপরে যান",footerDisclaimer:"শুধু শিক্ষামূলক তথ্য, চিকিৎসা পরামর্শ নয়। নিজের যোগ্যতা সম্পর্কে স্থানীয় রক্তদান কেন্দ্র বা স্বাস্থ্যকর্মীর কাছ থেকে জেনে নিন।",aboutEyebrow:"সম্পর্কে",aboutH1:"BloodLink Blog সম্পর্কে",aboutLead:"রক্তদান নিয়ে একটি বিনামূল্যের নির্দেশিকা, ইংরেজি ও বাংলায়",aboutH2a:"আমরা কী প্রকাশ করি",aboutP1:"যাঁরা রক্ত দিতে চান তাঁদের জন্য ব্যবহারিক নির্দেশিকা, রক্তের গ্রুপের সহজ ব্যাখ্যা, এবং রক্তের প্রয়োজনে থাকা মানুষের পাশে দাঁড়ানোর উপায়।",aboutH2b:"এই তথ্য কীভাবে ব্যবহার করবেন",aboutP2:"এখানকার সবকিছু শিক্ষামূলক। রক্তদানের যোগ্যতা, পদ্ধতি ও চিকিৎসাসংক্রান্ত সিদ্ধান্ত আপনার স্বাস্থ্য ও স্থানীয় নিয়মের ওপর নির্ভর করে, তাই স্থানীয় রক্তদান কেন্দ্র বা যোগ্য স্বাস্থ্যকর্মীর সঙ্গে নিশ্চিত করুন।",aboutH2c:"বিষয় প্রস্তাব করুন বা সমস্যা জানান",aboutP3:"কোনো ভুল পেয়েছেন, বা কোনো বিষয়ে লেখা চান? আমাদের লিখুন:",read:"প্রবন্ধ পড়ুন",back:"সব প্রবন্ধে ফিরুন",
      keepReading:"আরও পড়ুন",related:"সম্পর্কিত প্রবন্ধ",published:"প্রকাশিত",minRead:"মিনিট পড়া",
      disclaimer:"শুধু শিক্ষামূলক তথ্য। রক্তদানের যোগ্যতা, পদ্ধতি ও চিকিৎসাসংক্রান্ত সিদ্ধান্ত যোগ্য স্বাস্থ্যকর্মী বা স্থানীয় রক্তদান কেন্দ্রের সঙ্গে নিশ্চিত করুন।",
      notFound:"প্রবন্ধ পাওয়া যায়নি",notFoundText:"প্রবন্ধটি সরানো হয়েছে অথবা লিংকে ভুল থাকতে পারে।",goHome:"হোমে ফিরুন",
      allTopics:"সব বিষয়",shareCopied:"ওয়েবসাইটের লিংক কপি হয়েছে",shareUnavailable:"শেয়ার করতে এই লিংকটি কপি করুন:"
    }
  };
  let language = config.defaultLanguage || "en";
  try { language = localStorage.getItem("bloodlinkBlogLanguage") || language; } catch (_) {}
  if (!copy[language]) language = "en";
  let selectedTopic = "all";
  const HOME_LIMIT = 3;

  const t = key => (copy[language] && copy[language][key]) || copy.en[key] || key;
  const textOf = value => typeof value === "string" ? value : (value && (value[language] || value.en)) || "";
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const dateText = date => {
    const d = new Date(date + "T12:00:00");
    try { return new Intl.DateTimeFormat(language === "bn" ? "bn-BD" : "en-US", {day:"numeric",month:"short",year:"numeric"}).format(d); }
    catch { return date; }
  };
  const countText = n => language === "bn"
    ? new Intl.NumberFormat("bn-BD").format(n) + "টি প্রবন্ধ"
    : n + (n === 1 ? " article" : " articles");
  const slugFromURL = () => new URLSearchParams(location.search).get("slug");
  const getBlog = slug => blogs.find(b => b.slug === slug);
  // Only use HTTPS remote images or ordinary local paths; reject executable/data URL schemes.
  const safeImageURL = value => {
    const raw = String(value || "").trim();
    if (/^https:\/\//i.test(raw) || /^(assets\/|\.\/|\.\.\/|\/)[^\s]*$/i.test(raw)) return raw;
    return "assets/bloodlink-logo.png";
  };
  const readMinutes = value => {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(1, Math.min(120, Math.round(n))) : 3;
  };
  function setMeta(selector, attr, value) {
    let el = document.querySelector(selector);
    if (!el) { el = document.createElement("meta"); const [kind, key] = selector.match(/\[(name|property)="([^"]+)"\]/).slice(1); el.setAttribute(kind, key); document.head.appendChild(el); }
    el.setAttribute(attr, value);
  }
  function setSEO(title, description, image, canonical) {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
  }
  function setJSONLD(data) {
    let el = document.getElementById("bloodlink-jsonld");
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "bloodlink-jsonld"; document.head.appendChild(el); }
    el.textContent = JSON.stringify(data);
  }
  const absoluteURL = value => new URL(value || "assets/bloodlink-logo.png", (config.siteUrl || location.origin).replace(/\/$/, "") + "/").href;
  const categoryNames = () => [...new Set(blogs.map(b => textOf(b.category)))];
  const blogCard = blog => `
    <article class="blog-card">
      <a href="blog.html?slug=${encodeURIComponent(blog.slug)}" aria-label="${escapeHTML(textOf(blog.title))}">
        <img class="card-image" src="${escapeHTML(safeImageURL(blog.image))}" alt="${escapeHTML(textOf(blog.imageAlt) || textOf(blog.title))}" loading="lazy" decoding="async" onload="this.classList.add('loaded')" onerror="this.style.display='none'">
      </a>
      <div class="card-body">
        <div class="card-meta"><span class="category-label">${escapeHTML(textOf(blog.category))}</span><span>${escapeHTML(dateText(blog.date))}</span><span>${readMinutes(blog.readMinutes)} ${escapeHTML(t("minRead"))}</span></div>
        <h3 class="card-title"><a href="blog.html?slug=${encodeURIComponent(blog.slug)}">${escapeHTML(textOf(blog.title))}</a></h3>
        <a class="read-link" href="blog.html?slug=${encodeURIComponent(blog.slug)}">${escapeHTML(t("read"))}<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
    </article>`;

  function applyLanguage() {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t(key)) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === language));
    renderTopics();
    if (document.getElementById("blogGrid")) renderBlogList();
    if (document.getElementById("articleContent")) renderArticle();
  }

  function renderTopics() {
    const holder = document.getElementById("topicFilters");
    if (!holder) return;
    const topics = categoryNames();
    holder.innerHTML = `<button class="topic-chip ${selectedTopic === "all" ? "active" : ""}" data-topic="all">${escapeHTML(t("allTopics"))}</button>` +
      topics.map(topic => `<button class="topic-chip ${selectedTopic === topic ? "active" : ""}" data-topic="${escapeHTML(topic)}">${escapeHTML(topic)}</button>`).join("");
    holder.querySelectorAll("[data-topic]").forEach(btn => btn.addEventListener("click", () => {
      selectedTopic = btn.dataset.topic;
      renderTopics(); renderBlogList();
    }));
  }

  function renderBlogList() {
    const grid = document.getElementById("blogGrid");
    if (!grid) return;
    const input = document.getElementById("searchInput");
    const query = (input?.value || "").trim().toLocaleLowerCase();
    const visible = blogs.filter(blog => {
      const category = textOf(blog.category);
      const topicOK = selectedTopic === "all" || category === selectedTopic;
      const bodyText = Object.values(blog.body || {}).map(value => typeof value === 'string' ? value : (value || []).map(block => [block.heading || '', ...(block.paragraphs || []), ...(block.bullets || []), block.callout || ''].join(' ')).join(' ')).join(' ');
      const searchable = [textOf(blog.title), textOf(blog.excerpt), category, blog.slug, textOf(blog.metaDescription), bodyText].join(" ").toLocaleLowerCase();
      return topicOK && (!query || searchable.includes(query));
    }).sort((a,b) => b.date.localeCompare(a.date));
    const limit = document.body.classList.contains("home") && !query && selectedTopic === "all" ? HOME_LIMIT : Infinity;
    const shown = visible.slice(0, limit);
    grid.innerHTML = shown.length ? shown.map(blogCard).join("") : "";
    grid.hidden = visible.length === 0;
    if (!grid.dataset.entered && shown.length) {
      grid.dataset.entered = "1";
      grid.classList.add("enter");
      setTimeout(() => grid.classList.remove("enter"), 1000);
    }
    const count = document.getElementById("resultCount");
    if (count) count.textContent = countText(visible.length);
    const empty = document.getElementById("emptyState");
    if (empty) empty.hidden = visible.length !== 0;
    const clear = document.getElementById("clearSearch");
    if (clear) clear.hidden = !input?.value;
  }

  // Small safe Markdown renderer: article text is escaped before inline formatting is added.
  function renderBody(source) {
    if (Array.isArray(source)) return source.map(block => {
      if (block.callout) return `<div class="article-callout">${escapeHTML(block.callout)}</div>`;
      let html = block.heading ? `<h2>${escapeHTML(block.heading)}</h2>` : "";
      if (block.paragraphs) html += block.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("");
      if (block.bullets) html += `<ul>${block.bullets.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
      return html;
    }).join("");
    const inline = value => escapeHTML(value)
      .replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
    const lines = String(source || '').replace(/\r/g,'').split('\n');
    let html='', paragraph=[], list=[], quote=[];
    const flushP=()=>{ if(paragraph.length){html+=`<p>${inline(paragraph.join(' '))}</p>`;paragraph=[];} };
    const flushL=()=>{ if(list.length){html+=`<ul>${list.map(x=>`<li>${inline(x)}</li>`).join('')}</ul>`;list=[];} };
    const flushQ=()=>{ if(quote.length){html+=`<div class="article-callout">${inline(quote.join(' '))}</div>`;quote=[];} };
    for(const raw of lines){ const line=raw.trim();
      if(!line){flushP();flushL();flushQ();continue;}
      if(line.startsWith('> ')){flushP();flushL();quote.push(line.slice(2));continue;}
      if(line.startsWith('- ') || line.startsWith('* ')){flushP();flushQ();list.push(line.slice(2));continue;}
      if(/^#{2,3}\s/.test(line)){flushP();flushL();flushQ();const level=line.startsWith('###')?3:2;html+=`<h${level}>${inline(line.replace(/^#{2,3}\s+/,''))}</h${level}>`;continue;}
      flushL();flushQ();paragraph.push(line);
    }
    flushP();flushL();flushQ();return html;
  }

  function renderArticle() {
    const target = document.getElementById("articleContent");
    if (!target) return;
    const blog = getBlog(slugFromURL());
    if (!blog) {
      setSEO(`${t("notFound")} | BloodLink Blog`, t("notFoundText"), absoluteURL(config.ogImage), absoluteURL("404.html"));
      target.innerHTML = `<div class="not-found"><div class="empty-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg></div><h1>${escapeHTML(t("notFound"))}</h1><p>${escapeHTML(t("notFoundText"))}</p><a class="button-primary" style="display:inline-block" href="index.html">${escapeHTML(t("goHome"))}</a></div>`;
      const related = document.getElementById("relatedGrid"); if (related) related.innerHTML = "";
      return;
    }
    const title = textOf(blog.title);
    const description = textOf(blog.metaDescription) || textOf(blog.excerpt) || `Read ${title} on BloodLink Blog.`;
    const articleURL = absoluteURL(`blog.html?slug=${encodeURIComponent(blog.slug)}`);
    setSEO(textOf(blog.metaTitle) || `${title} | BloodLink Blog`, description, absoluteURL(blog.ogImage || blog.image || config.ogImage), articleURL);
    setJSONLD({
      "@context": "https://schema.org", "@type": "Article",
      headline: title, description, datePublished: blog.date, inLanguage: language,
      image: absoluteURL(blog.ogImage || blog.image || config.ogImage),
      author: { "@type": "Organization", name: blog.author || "BloodLink Blog" },
      publisher: { "@type": "Organization", name: "BloodLink Blog", logo: { "@type": "ImageObject", url: absoluteURL("assets/bloodlink-logo.png") } },
      mainEntityOfPage: articleURL
    });
    const body = blog.body?.[language] || blog.body?.en || [];
    target.innerHTML = `
      <img class="article-hero-image" src="${escapeHTML(safeImageURL(blog.image))}" alt="${escapeHTML(textOf(blog.imageAlt) || title)}" decoding="async" onload="this.classList.add('loaded')" onerror="this.style.display='none'">
      <header class="article-header">
        <div class="card-meta"><span class="category-label">${escapeHTML(textOf(blog.category))}</span><span>${escapeHTML(t("published"))} ${escapeHTML(dateText(blog.date))}</span><span>${readMinutes(blog.readMinutes)} ${escapeHTML(t("minRead"))}</span></div>
        <h1>${escapeHTML(title)}</h1>
        <p class="article-subtitle">${escapeHTML(textOf(blog.excerpt))}</p>
        <div class="article-actions"><button class="share-btn" id="shareArticle" type="button"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg><span>${escapeHTML(t("shareArticle"))}</span></button></div>
      </header>
      <article class="article-body">${renderBody(body)}<p class="article-disclaimer">${escapeHTML(t("disclaimer"))}</p></article>`;
    document.getElementById("shareArticle")?.addEventListener("click", async event => {
      const label = event.currentTarget.querySelector("span");
      try {
        if (navigator.share) await navigator.share({ title, url: articleURL });
        else { await navigator.clipboard.writeText(articleURL); label.textContent = t("linkCopied"); setTimeout(() => { label.textContent = t("shareArticle"); }, 2000); }
      } catch (err) { if (err?.name !== "AbortError") prompt(t("shareUnavailable"), articleURL); }
    });
    const related = document.getElementById("relatedGrid");
    if (related) related.innerHTML = blogs.filter(b => b.slug !== blog.slug && textOf(b.category) === textOf(blog.category)).concat(blogs.filter(b => b.slug !== blog.slug && textOf(b.category) !== textOf(blog.category))).slice(0,2).map(blogCard).join("");
  }

  function setLanguage(next) {
    language = next === "bn" ? "bn" : "en";
    selectedTopic = "all";
    try { localStorage.setItem("bloodlinkBlogLanguage", language); } catch {}
    applyLanguage();
  }

  function initMenu() {
    const toggle = document.getElementById("menuToggle"), close = document.getElementById("closeMenu");
    const scrim = document.getElementById("scrim");
    const setOpen = open => {
      document.body.classList.toggle("menu-open", open);
      toggle?.setAttribute("aria-expanded", String(open));
      document.getElementById("sideMenu")?.setAttribute("aria-hidden", String(!open));
    };
    toggle?.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    close?.addEventListener("click", () => setOpen(false));
    scrim?.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu-links a[href]").forEach(a => {
      const target = a.getAttribute("href").split("#")[0];
      if (target === here && !a.getAttribute("href").includes("#")) a.setAttribute("aria-current", "page");
    });
    document.getElementById("menuLanguage")?.addEventListener("click", () => setLanguage(language === "en" ? "bn" : "en"));
    document.getElementById("shareButton")?.addEventListener("click", async () => {
      const url = location.href;
      try {
        if (navigator.share) await navigator.share({ title: document.title, url });
        else if (navigator.clipboard) { await navigator.clipboard.writeText(url); alert(t("shareCopied")); }
        else prompt(t("shareUnavailable"), url);
      } catch (err) { if (err?.name !== "AbortError") prompt(t("shareUnavailable"), url); }
    });
  }

  function initReadingProgress() {
    const bar = document.getElementById("readProgress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0) + ")";
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener("resize", update);
    update();
  }

  document.addEventListener("bloodlink:articles-ready", () => {
    blogs = window.BLOODLINK_BLOGS || [];
    document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
    document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
    document.getElementById("searchInput")?.addEventListener("input", renderBlogList);
    document.getElementById("searchInput")?.addEventListener("keydown", event => {
      if (event.key === "Escape") { event.currentTarget.value = ""; renderBlogList(); event.currentTarget.blur(); }
    });
    document.getElementById("clearSearch")?.addEventListener("click", () => { const input = document.getElementById("searchInput"); input.value = ""; renderBlogList(); input.focus(); });
    document.getElementById("resetSearch")?.addEventListener("click", () => {
      const input = document.getElementById("searchInput"); if (input) input.value = "";
      selectedTopic = "all"; renderTopics(); renderBlogList();
    });
    initMenu();
    initReadingProgress();
    if (document.getElementById("blogGrid")) {
      setSEO("BloodLink Blog | Donate blood, save lives", "Explore clear, reliable information about blood donation: donor guides, blood group basics and ways to support people who need blood.", absoluteURL(config.ogImage), absoluteURL("index.html"));
    }
    applyLanguage();
  });
})();
