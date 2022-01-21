let days = document.getElementById("days");
let hourse = document.getElementById("hourse");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let d = new Date();
let f = new Date(2022, 0, 9, 10, 30, 0);
let hole = Math.floor((f - d) / 1000);
let dd = Math.floor(hole / (24 * 60 * 60));
let k = hole % (24 * 60 * 60);
let hh = Math.floor(k / 3600);
let kk = k % 3600;
let mm = Math.floor(kk / 60);
let ss = mm % 60;

days.innerHTML = dd;
hourse.innerHTML = hh;
mins.innerHTML = mm;
secs.innerHTML = ss;

console.log(String(3).padStart(2, "0"));

function countDown() {
  secs.innerHTML -= 1;
  if (
    hourse.innerHTML === `0` &&
    mins.innerHTML === `0` &&
    secs.innerHTML === `0`
  ) {
    secs.innerHTML = `59`;
    mins.innerHTML = `59`;
    hourse.innerHTML = `23`;
    days.innerHTML -= 1;
  } else if (mins.innerHTML === `0` && secs.innerHTML === `0`) {
    secs.innerHTML = `59`;
    mins.innerHTML = `59`;
    hourse.innerHTML -= 1;
  } else if (secs.innerHTML === `0`) {
    secs.innerHTML = `59`;
    mins.innerHTML -= 1;
  } else if (days.innerHTML === `0`) {
    clearInterval(countDown);
  }
}

setInterval(countDown, 1000);
