const HEADER = document.querySelector(".header");
const NAV = document.querySelector("nav");
const ICONEMINIMIZE = document.querySelector(
  ".header--box-icon-nav__icon-minimize"
);
const ICONEXPAND = document.querySelector(".header--icon-expand");

console.log(NAV);

ICONEMINIMIZE.addEventListener("click", () => {
  HEADER.classList.add("top-header");
  NAV.classList.add("anim-nav");
  ICONEXPAND.classList.remove("none");
  HEADER.classList.remove("top-header-reverse");
  NAV.classList.remove("anim-nav-reverse");
});

ICONEXPAND.addEventListener("click", () => {
  HEADER.classList.add("top-header-reverse");
  NAV.classList.add("anim-nav-reverse");
  ICONEXPAND.classList.add("none");
  HEADER.classList.remove("top-header");
  NAV.classList.remove("anim-nav");
});
