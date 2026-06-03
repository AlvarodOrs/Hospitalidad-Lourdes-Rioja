let slideIndex = 0;
let slideInterval = null;

export async function initSlider() {
  await loadSlides();
  startSlider();
}

async function loadSlides() {
  try {
    const res = await fetch("/content/slides.json");
    const data = await res.json();

    const container = document.getElementById("slides");
    if (!container) return;

    const slides = data.slides.sort((a, b) => a.order - b.order);

    container.innerHTML = "";

    for (let r = 0; r < 5; r++) {
      slides.forEach(slide => {
        const div = document.createElement("div");
        div.className = "slide";
        div.innerHTML = `<img src="${slide.image}">`;
        container.appendChild(div);
      });
    }

  } catch (err) {
    console.error("Slides error:", err);
  }
}

function startSlider() {
  const wrapper = document.querySelector(".slides");
  if (!wrapper) return;

  if (slideInterval) clearInterval(slideInterval);

  slideInterval = setInterval(() => {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    slideIndex = (slideIndex + 1) % slides.length;
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  }, 3000);
}


/* =========================
   TESTIMONIALS
========================= */

let quoteIndex = 0;
let quoteInterval = null;

export async function initTestimonials() {
  try {
    const quoteEl = document.querySelector(".testimonial-quote blockquote");
    const authorEl = document.querySelector(".testimonial-author cite");

    if (!quoteEl || !authorEl) return;

    const res = await fetch("/content/quotes.json");
    const quotes = await res.json();

    if (!quotes.length) return;

    function showQuote(i) {
      const q = quotes[i];

      quoteEl.parentElement.classList.add("fade-out");

      setTimeout(() => {
        quoteEl.textContent = `“${q.text}”`;
        authorEl.textContent = `${q.author} · ${q.role}`;
        quoteEl.parentElement.classList.remove("fade-out");
      }, 680);
    }

    showQuote(0);

    if (quoteInterval) clearInterval(quoteInterval);

    quoteInterval = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      showQuote(quoteIndex);
    }, 20000);

  } catch (err) {
    console.error("Quotes error:", err);
  }
}

/* =========================
   MESSAGE
========================= */

let quoteIndex1 = 0;
let quoteInterval1 = null;

export async function initMessage() {
  try {
    const messageBody = document.querySelector(".message .message-body");
    const authorEl = document.querySelector(".message cite");

    if (!messageBody || !authorEl) return;

    const res = await fetch("/content/messages.json");
    const quotes = await res.json();

    if (!quotes.length) return;

    function showQuote(i) {
      const q = quotes[i];

      messageBody.parentElement.classList.add("fade-out");

      setTimeout(() => {

        const paragraphs = q.text
          .split("\n")
          .filter(p => p.trim() !== "")
          .map((p, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;

            let text = p;

            if (isFirst) text = "“<i>" + text;
            if (isLast) text = text + "</i>”";

            return `
              <p 
                class="reveal reveal-delay-${index + 2}" 
                ${!isFirst ? 'style="margin-top:1.5rem;"' : ''}
              >
                ${text}
              </p>
            `;
          })
          .join("");

        messageBody.innerHTML = paragraphs;

        requestAnimationFrame(() => {
          messageBody
            .querySelectorAll(".reveal")
            .forEach(el => el.classList.add("visible"));
        });

        authorEl.textContent = q.author;

        messageBody.parentElement.classList.remove("fade-out");

      }, 680);
    }

    showQuote(0);

    if (quoteInterval1) clearInterval(quoteInterval1);

    quoteInterval1 = setInterval(() => {
      quoteIndex1 = (quoteIndex1 + 1) % quotes.length;
      showQuote(quoteIndex1);
    }, 20000);

  } catch (err) {
    console.error("Message error:", err);
  }
}


// Legal Blob
(function () {
  const aside  = document.querySelector('aside');
  const footer = document.querySelector('footer');
  if (!aside || !footer) return;

  const BASE_BOTTOM = 32; // matches the 2rem in your inline style

  function clampAside() {
    const footerTop    = footer.getBoundingClientRect().top;
    const asideHeight  = aside.offsetHeight;
    const viewH        = window.innerHeight;

    // How much of the footer is already inside the viewport?
    const overlap = viewH - footerTop;

    if (overlap > 0) {
      // Push the aside up by however much the footer has crept in
      aside.style.bottom = BASE_BOTTOM + overlap + + 59.375 + 'px';
    } else {
      aside.style.bottom = BASE_BOTTOM + 'px';
    }
  }

  window.addEventListener('scroll', clampAside, { passive: true });
  window.addEventListener('resize', clampAside, { passive: true });
  clampAside(); // run once on load
})();