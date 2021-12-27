var rnd1 = Math.floor(Math.random() * 6) + 1;
var rnd2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + rnd1 + ".png";
var randomImage2 = "dice" + rnd2 + ".png";

var imageSource1 = "images/" + randomImage1;
var imageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (rnd1 > rnd2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (rnd1 < rnd2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
