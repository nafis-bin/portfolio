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


// tab

const $tabBtn = document.querySelectorAll("[data-tab-btn]")

let [lastActiveTab] = document.querySelectorAll("[data-tab-content]")


let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove('active');
    lastActiveTabBtn.classList.remove('active');

    console.log(item.dataset.tabBtn)
    const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

    $tabContent.classList.add('active');
    this.classList.add('active');

    lastActiveTab = $tabContent;

    lastActiveTabBtn = this;
    
  })
})


let cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.onclick = () => {
    window.open(card.dataset.link, '_blank');
  }
})