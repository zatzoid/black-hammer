window.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.blog__wrp')
    const itemlist = container.querySelector('.blog__items')
    const items = itemlist.querySelectorAll('.blog__item')

    let touchStart = 0
    let currentSlide = 0

    container.addEventListener('touchstart', (ev) => { touchStart = ev.touches[0].clientX })
    container.addEventListener('touchend', (ev) => {

        const maxSlide = window.innerWidth > 1340 ? 1 : window.innerWidth > 1000 ? 2 : 3
        const endX = ev.changedTouches[0].clientX

        if (touchStart + 50 > endX && currentSlide < maxSlide) {
            currentSlide++



        } else if (touchStart + 50 < endX && currentSlide > 0) {
            currentSlide--

        } else {
            return
        }

        touchStart = 0
        itemlist.style.transform = `translateX(calc(-${items[0].getBoundingClientRect().width * currentSlide}px - ${30 * currentSlide}px))`
    })


    container.addEventListener('wheel', (ev) => {
        const maxSlide = window.innerWidth > 1340 ? 1 : window.innerWidth > 1000 ? 1 : 2
        const endX = ev.deltaY

        if (1 > endX && currentSlide < maxSlide) {
            currentSlide++



        } else if (1 < endX && currentSlide > 0) {
            currentSlide--

        } else {
            return
        }

      
        itemlist.style.transform = `translateX(calc(-${items[0].getBoundingClientRect().width * currentSlide}px - ${30 * currentSlide}px))`
    })
    window.addEventListener('resize', () => {
        itemlist.style.transform = `translateX(0)`
        currentSlide = 0
    })


}, false);


