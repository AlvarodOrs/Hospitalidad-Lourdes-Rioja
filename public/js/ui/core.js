export function initHeaderScroll(header, options = {}) {
  if (!header) return () => {};

  let lastScroll = 0;
  let isHovering = false;

  const threshold = options.threshold ?? 20;
  const startOffset = options.startOffset ?? 100;

  // Track hover state
  header.addEventListener("mouseenter", () => {
    isHovering = true;
    header.classList.add("scroll-up"); // force visible
    header.classList.remove("scroll-down");
  });

  header.addEventListener("mouseleave", () => {
    isHovering = false;
  });

  function onScroll() {
    const current = window.pageYOffset;

    if (current <= 0) {
      header.classList.remove("scroll-up");
      return;
    }

    if (Math.abs(current - lastScroll) < threshold) return;

    // 🔑 Key condition: don't hide if interacting
    if (!isHovering && current > lastScroll && current > startOffset) {
      header.classList.add("scroll-down");
      header.classList.remove("scroll-up");
    } else {
      header.classList.add("scroll-up");
      header.classList.remove("scroll-down");
    }

    lastScroll = current;
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    header.removeEventListener("mouseenter", () => {});
    header.removeEventListener("mouseleave", () => {});
  };
}

export function initScrollReveal(selector = ".reveal", options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return () => {};

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    {
      threshold: options.threshold ?? 0.12,
      rootMargin: options.rootMargin ?? "0px 0px -80px 0px"
    }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}

export function initSmoothScroll(header) {
  if (!header) return () => {};

  function handler(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const offset = header.offsetHeight;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: top - offset,
      behavior: "smooth"
    });
  }

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}