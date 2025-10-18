const video = document.querySelector(".slide-img3");
const slides = Array.from(document.querySelectorAll(".slide-img"));
const btns = Array.from(document.querySelectorAll(".btn"))

let currentIndex = 0;
let time = 0;

showSlide(currentIndex)

setInterval(() => {
    if (isVideoPlaying()) {
        time = 0
        return
    }

    if (time < 5) {
        time++;
    } else {
        time = 0;
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
}, 1000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? 1 : 0;
        btns[i].style.background = (i === index) ? "black" : "transparent";
    });

    if (index !== 2 && video) {
        video.pause();
        // video.currentTime = 0;
    }
}

function isVideoPlaying() {
    return !video.paused && !video.ended && video.readyState > 2;
}

function selectSlide(index) {
    currentIndex = index
    showSlide(index)
    time = 0
}

function transferSlide(type) {
    
    if (type === "prev") {
        currentIndex = (currentIndex - 1) % slides.length
    }else if(type==="next"){
        currentIndex = (currentIndex + 1) % slides.length
    }

    if(currentIndex<0){
        currentIndex=!currentIndex
    }
    showSlide(currentIndex)
    time = 0
}