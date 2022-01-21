let aSide1 = document.getElementById("a-side");

let toggle = true;

function openMenu() {
  aSide1.style.cssText = `
    transform-origin: left
    `;
  if (toggle === true) {
    aSide1.style.display = `grid`;
  } else {
    aSide1.style.display = `none`;
  }
  toggle = !toggle;
}
