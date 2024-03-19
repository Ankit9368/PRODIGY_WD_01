const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    navbar.style.backgroundColor = "#000c1b";
  } else {
    navbar.style.backgroundColor = "#2d013b";
  }
});

const navLinks = document.querySelectorAll(".box a");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("mouseenter", function () {
    navLink.style.color = "#0befda";
  });

  navLink.addEventListener("mouseleave", function () {
    navLink.style.color = "white";
  });
});
