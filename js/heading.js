window.addEventListener("DOMContentLoaded", function () {

    /* heading */
    const container = document.querySelector('.heading__c')
    const items = container.querySelectorAll('.heading__c-item')

    items.forEach((el) => {
        el.addEventListener('click', headingCards)

    })

    let touchStart = 0
    let currentSlide = 0
    container.addEventListener('touchstart', (ev) => { touchStart = ev.touches[0].clientX })
    container.addEventListener('touchend', (ev) => {
        const endX = ev.changedTouches[0].clientX
        if (touchStart + 50 > endX && currentSlide < 2) {
            currentSlide++
        } else if (touchStart + 50 < endX && currentSlide > 0) {
            currentSlide--
        }
        container.style.transform = `translateX(calc(-${currentSlide}00% - ${20 * currentSlide}px))`
    })




    window.addEventListener('resize', () => {
        if (window.innerWidth <= 800) {
            items.forEach(el => {
                el.classList.remove('heading__c-item_opened')
                el.classList.remove('heading__c-item_closed')
            });
        } else {
            container.style.transform = `translateX(-000%)`
        }
    })

    function headingCards(e) {
        if (window.innerWidth > 800) {
            items.forEach(el => {
                el.classList.remove('heading__c-item_opened')
                el.classList.add('heading__c-item_closed')
            });
            e.currentTarget.classList.remove('heading__c-item_closed')
            e.currentTarget.classList.add('heading__c-item_opened')
        }

    }
    /* heading */




}, false);


