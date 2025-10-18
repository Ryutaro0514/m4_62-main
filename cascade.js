const right = document.querySelector(".right");
const left = document.querySelector(".left");
const img = document.querySelectorAll(".img-all img, .img-all video");
let fripIndex = 0;

function frip(index) {
  img.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
    if (item.tagName.toLowerCase() === "video") {
      if (i === index) {
        item.currentTime = 0;
        item.play();
      } else {
        item.pause();
      }
    }
  });
  fripIndex = index;
}

left.addEventListener("click", () => {
  fripIndex = (fripIndex - 1 + img.length) % img.length;
  frip(fripIndex);
});
right.addEventListener("click", () => {
  fripIndex = (fripIndex + 1) % img.length;
  frip(fripIndex);
});

frip(0);
