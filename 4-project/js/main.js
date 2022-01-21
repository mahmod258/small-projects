let contMain1 = document.getElementById("contMain1");
let mainMenu = document.getElementById("main-menu");
let lis = document.getElementsByClassName("lis");

let toggle = true;

function dMenu() {
  contMain1.style.cssText = `
   position: absolute;
    background-color: white;
    top: 80px;
    width: 100%;
    display: block;
    box-sizing: content-box;
    padding-left: 30px;
    margin-left: -20px;
    box-shadow:2px 19px 20px -25px black;
    `;
  mainMenu.style.cssText = `
    display:flex;
    flex-flow:column
      `;
  for (let i = 0; i < lis.length; i++) {
    lis[
      i
    ].style.cssText = `list-style:none; margin-top:10px; margin-bottom:10px`;
  }

  if (toggle === true) {
    contMain1.style.display = `block`;
    toggle = !toggle;
  } else if (toggle === false) {
    contMain1.style.display = `none`;
    toggle = !toggle;
  }
}
