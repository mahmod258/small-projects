let body = document.getElementById("body");
let colorId = document.getElementById("color-Id");

var arrC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];

function bgRandom() {
  let randomColor = `#${[
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
    arrC[Math.floor(Math.random() * arrC.length - 1)].toString(),
  ].join("")}`;
  body.style.backgroundColor = randomColor;
  colorId.innerHTML = randomColor;
  console.log(randomColor);
}

// Math.floor(Math.random() * arrC.length - 1);
