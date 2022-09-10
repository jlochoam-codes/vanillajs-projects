let counter = 0;

const displayValue = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("decrease")) counter--;
    else if (button.classList.contains("increase")) counter++;
    else counter = 0;

    if (counter < 0) displayValue.style.color = "var(--clr-red-dark)";
    else if (counter === 0) displayValue.style.color = "var(--clr-black)";
    else displayValue.style.color = "var(--clr-green-dark)";
    displayValue.textContent = counter;
  });
});
