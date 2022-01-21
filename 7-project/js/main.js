let content = document.getElementsByClassName("content");
let cont = document.getElementById("cont");
let icons = document.getElementsByClassName("icons");

let toggler0 = true;
let toggler1 = true;
let toggler2 = true;

function openIt(p) {
  if (p === 0) {
    if (toggler0 === true) {
      content[0].style.display = `block`;
      toggler0 = !toggler0;
    } else {
      content[0].style.display = `none`;
      toggler0 = !toggler0;
    }
  } else if (p === 1) {
    if (toggler1 === true) {
      content[1].style.display = `block`;
      toggler1 = !toggler1;
    } else {
      content[1].style.display = `none`;
      toggler1 = !toggler1;
    }
  } else if (p === 2) {
    if (toggler2 === true) {
      content[2].style.display = `block`;
      toggler2 = !toggler2;
    } else {
      content[2].style.display = `none`;
      toggler2 = !toggler2;
    }
  }
}
icons[0].className = `far fa-plus-square icon`;
icons[0].className = `far fa-minus-square icon`;
