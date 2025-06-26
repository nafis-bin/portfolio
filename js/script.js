"use strict";

// light and dark mode

const theme_btn = document.querySelector('.icon-btn.theme-btn')

const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}


const changeTheme = () => {

  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";

  sessionStorage.setItem("theme", $HTML.dataset.theme);
}


theme_btn.addEventListener("click", changeTheme);