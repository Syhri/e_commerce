// HOME NAVBAR RESPONSIVE
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// SLIDER 

// SLIDER 2
const imgList = document.querySelector('.slider-wrapper .image-list');
const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');
const maxScrollLeft = imgList.scrollWidth - imgList.clientWidth;

slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tujuan = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imgList.clientWidth * tujuan;
        imgList.scrollBy({left: scrollAmount, behavior: "smooth"})
    })
})

const handleSlideButtons = () => {
    slideButtons[0].style.display = imgList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imgList.scrollLeft >= maxScrollLeft ? "none" : "block";
}

imgList.addEventListener("scroll", () => {
    handleSlideButtons();
})