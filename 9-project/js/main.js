let menu = document.getElementById("menu");
let header = document.getElementsByTagName("header");
let text = document.getElementsByClassName("text");

let toggler = true;

function openMenu() {
  if (toggler === true) {
    menu.style.display = `block`;
    toggler = !toggler;
  } else {
    menu.style.display = `none`;
    toggler = !toggler;
  }
}
window.onscroll = function () {
  if (window.scrollY >= 100) {
    header[0].style.backgroundColor = `white`;
    header[0].style.position = `fixed`;
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = `black`;
    }
  } else if (window.scrollY < 100) {
    header[0].style.backgroundColor = `transparent`;
    header[0].style.position = `absolute`;
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = `white`;
    }
  }
};

if (window.matchMedia("(max-width: 602px)") === true) {
  header[0].style.backgroundColor = `white`;
}
console.log(window.matchMedia("(max-width: 602px)"));
