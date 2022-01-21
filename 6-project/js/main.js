let backBlue = document.getElementsByClassName("back-blue");
let modal = document.getElementById("modal");
let openIn = document.getElementById("open-in");
function openIt() {
  backBlue[0].style.display = `block`;
  backBlue[1].style.display = `block`;
  modal.style.display = `flex`;
}
function hideIt() {
  backBlue[0].style.display = `none`;
  backBlue[1].style.display = `none`;
  modal.style.display = `none`;
}
