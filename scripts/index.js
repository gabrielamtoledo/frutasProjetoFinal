function adicionar() {
  let quantidade = document.querySelector("#quantity");
  quantidade.innertext = "1";
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  let scrollAmount = 0;

  arrowLeft.addEventListener("click", function () {
    scrollAmount -= 270; // Adjust scroll distance as needed
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  arrowRight.addEventListener("click", function () {
    scrollAmount += 270; // Adjust scroll distance as needed
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollAmount > maxScroll) {
      scrollAmount = maxScroll;
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});
