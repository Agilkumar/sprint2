const images = document.querySelectorAll(".pop-img");
const overlay = document.querySelector(".popup-image");
const overImg = document.querySelector(".over-img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    console.log("click");
    overlay.classList.remove("hidden");
    overImg.src = image.getAttribute("src");
  });
});
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
