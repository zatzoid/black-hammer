window.addEventListener("DOMContentLoaded", function () {

    /* heading */
    const container = document.querySelector('.heading__c')
    const items = container.querySelectorAll('.heading__c-item')
    const counter = document.querySelector('.heading__wrp-count')

    items.forEach((el) => {
        el.addEventListener('click', (ev)=>{
            if (window.innerWidth > 800) {
                items.forEach(el => {
                    el.classList.remove('heading__c-item_opened')
                    el.classList.add('heading__c-item_closed')
                });
                ev.currentTarget.classList.remove('heading__c-item_closed')
                ev.currentTarget.classList.add('heading__c-item_opened')
            }
        })

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
        counter.textContent = `0${currentSlide + 1}`
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

    /* heading */




}, false);


