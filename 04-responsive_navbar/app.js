const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // const cl = links.classList;
  // cl.contains("show-links") ? cl.remove("show-links") : cl.add("show-links");
  links.classList.toggle("show-links");
});
