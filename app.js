const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        slideClear()
        slide.classList.add('active')
    })
}

function slideClear() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}