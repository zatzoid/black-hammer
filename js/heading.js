window.addEventListener("DOMContentLoaded", function () {

    /* heading */
    const container = document.querySelector('.heading__c')
    const items = container.querySelectorAll('.heading__c-item')

    items.forEach((el) => {
        el.addEventListener('click', headingCards)

    })
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 800) {
            items.forEach(el => {
                el.classList.remove('heading__c-item_opened')
                el.classList.remove('heading__c-item_closed')
            });
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


