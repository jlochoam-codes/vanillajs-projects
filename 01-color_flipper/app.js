const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue"];
const btn = document.querySelector("#btn");
const bgColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomIndex = getRandomIndex(colors);
  document.body.style.backgroundColor = colors[randomIndex];
  bgColor.textContent = colors[randomIndex];
});

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
