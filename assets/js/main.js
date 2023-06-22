'use strict';

// preload //

// loading will end after document is loaded //
const preloader = document.querySelector("[data-preload]")

window.addEventListener("load", () => {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded")
})
