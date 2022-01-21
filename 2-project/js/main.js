let min = document.getElementById("min");
let reset = document.getElementById("reset");
let plus = document.getElementById("plus");
let number = document.getElementById("number");

function numbers(p) {
  if (p !== 0) {
    number.innerHTML = parseInt(number.innerHTML) + p;
    if (number.innerHTML < 0) {
      number.style.color = `red`;
    } else if (number.innerHTML > 0) {
      number.style.color = `green`;
    }
  } else {
    number.innerHTML = 0;
    number.style.color = `black`;
  }
}
