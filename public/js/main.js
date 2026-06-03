import {
  initHeaderScroll,
  initScrollReveal,
  initSmoothScroll,
} from "./ui/core.js";

import {
  initSlider,
  initTestimonials,
  initMessage,
} from "./ui/features.js";

import {
  contactForm,
} from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  
  // Core UI
  const header = document.querySelector("nav");
  initHeaderScroll(header);
  initScrollReveal();
  initSmoothScroll(header);

  // Features
  initSlider();
  initTestimonials();
  initMessage();

  // EmailJS
  contactForm();
});