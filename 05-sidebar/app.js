const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
