/* Site-wide helpers shared by every page: contact links from config, footer year, back-to-top button. */
(() => {
  const cfg = window.BLOODLINK_BLOG_CONFIG || {};
  const email = cfg.reportEmail;
  if (email) {
    document.querySelectorAll("[data-report-link]").forEach(a => {
      const query = (a.getAttribute("href") || "").match(/\?.*$/);
      a.setAttribute("href", "mailto:" + email + (query ? query[0] : ""));
    });
    document.querySelectorAll("[data-email-text]").forEach(a => { a.textContent = email; });
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const button = document.createElement("button");
  button.type = "button";
  button.className = "to-top";
  button.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>';
  const label = () => document.documentElement.lang === "bn" ? "উপরে যান" : "Back to top";
  button.setAttribute("aria-label", label());
  document.body.appendChild(button);
  let visible = false, ticking = false;
  const update = () => {
    const show = scrollY > 800;
    if (show !== visible) { visible = show; button.classList.toggle("show", show); button.setAttribute("aria-label", label()); }
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  button.addEventListener("click", () => {
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  });

  // On an article page, mark that the visitor is about to return to a list page.
  if (document.getElementById("articleView") || /blog\.html$/.test(location.pathname)) {
    try { sessionStorage.setItem("bloodlinkFromArticle", "1"); } catch {}
  }
  // Back link on an article: go back in history so the list keeps its scroll position.
  document.querySelectorAll(".back-link").forEach(link => {
    link.addEventListener("click", event => {
      let sameSite = false;
      try { sameSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch {}
      if (sameSite && history.length > 1) { event.preventDefault(); history.back(); }
    });
  });
})();
