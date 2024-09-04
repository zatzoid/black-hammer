window.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector('.categories__c-items')
    const items = container.querySelectorAll('.categories__c-item')

    let touchStart = 0
    let currentSlide = 0

    container.addEventListener('touchstart', (ev) => { touchStart = ev.touches[0].clientX })
    container.addEventListener('touchend', (ev) => {
        const maxSlide = window.innerWidth > 1300 ? null : window.innerWidth > 1000 ? 1 : window.innerWidth > 600 ? 2 : 3
        const endX = ev.changedTouches[0].clientX
        
        if (touchStart  > endX && currentSlide < maxSlide) {
            currentSlide++


        } else if (touchStart  < endX  && currentSlide > 0) {
            currentSlide--

        } else {


            return
        }

        touchStart = 0
        container.style.transform = `translateX(calc(-${items[0].getBoundingClientRect().width * currentSlide}px - ${30 * currentSlide}px))`
    })
    window.addEventListener('resize', () => {
        container.style.transform = `translateX(0)`
        currentSlide = 0
    })


}, false);


