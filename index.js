const navIcon = document.querySelector(".ico");

const sideIcon = document.querySelector(".sideIco");

const sidebar = document.querySelector(".sidebar");

navIcon.addEventListener("click", toggle);


sideIcon.addEventListener("click", toggle2);

function toggle2() {
  sidebar.style.display = "none";
  document.querySelector(".content").style.display = "block";
}

function toggle() {
  sidebar.style.display = "block";
}

function toggle2() {
  sidebar.style.display = "none";
}

