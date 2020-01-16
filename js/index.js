window.addEventListener('DOMContentLoaded', () => {
  const logoImage = document.querySelector(".logo-heading");
  logoImage.style.transition = "transform 0.3s";
  logoImage.addEventListener("mouseover", () => logoImage.style.transform = "scale(1.2)");
  logoImage.addEventListener("mouseout", () => logoImage.style.transform = "scale(1)");



  for (const node of document.querySelectorAll("nav a")) {
    node.addEventListener("click", () => node.style.color = "#7c508f");
    node.addEventListener("dblclick", () => node.style.color = "");
  }

  const headerImg = document.querySelector("header img");
  headerImg.style.transition = "transform 0.3s";
  headerImg.addEventListener("wheel", () => headerImg.style.transform = "scale(0.5)");

  for (const node of document.querySelectorAll(".destination")) {
    node.addEventListener("contextmenu", evt => {
      evt.preventDefault();
      node.style.filter = "hue-rotate(90deg)";
    });
  }

  for (const node of document.querySelectorAll(".btn")) {
    node.addEventListener("contextmenu", evt => {
      evt.preventDefault();
      evt.stopPropagation();
      node.style.opacity = "";
    });
    node.addEventListener("copy", () => node.style.opacity = "0.5");
  }

  for (const node of document.querySelectorAll("img")) {
    node.addEventListener("mousemove", () => node.style.filter = "grayscale(100%)");
    node.addEventListener("mouseleave", () => node.style.filter = "");
  }
});
