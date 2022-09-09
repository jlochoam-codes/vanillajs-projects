const hexDigits =
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const bgColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomHexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomIndex(hexDigits);
    randomHexColor = randomHexColor.concat(hexDigits[randomIndex]);
  }
  document.body.style.backgroundColor = randomHexColor;
  bgColor.textContent = randomHexColor;
});

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
