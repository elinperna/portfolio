document.querySelectorAll(".image-slider").forEach(slider => {
  const images = slider.dataset.images.split(",");
  const img = slider.querySelector(".slider-image");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let index = 0;

  function updateImage() {
    img.src = images[index];
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateImage();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImage();
  });

  // Dölj pilar om bara 1 bild
  if (images.length <= 1) {
    prev.style.display = "none";
    next.style.display = "none";
  }
});
