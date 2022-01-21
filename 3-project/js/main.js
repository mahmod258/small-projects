let contents = document.getElementsByClassName("content");

console.log();

let dBlock;

function change(p) {
  for (let i = 0; i < contents.length; i++) {
    if (getComputedStyle(contents[i], null).display === `block`) {
      if (i === 0 && p === -1) {
        dBlock = contents[lenght - 1];
      } else if (i === contents.length - 1 && p === 1) {
        dBlock = contents[0];
      } else {
        dBlock = contents[i + p];
      }
    }
    console.log(`hello`);
  }
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = `none`;
  }
  dBlock.style.display = `block`;
}

function surprise() {
  let random = Math.floor(Math.random() * contents.length);
  dBlock = contents[random];
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = `none`;
  }
  dBlock.style.display = `block`;
}
