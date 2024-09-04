window.addEventListener("DOMContentLoaded", function () {
    /* categories__c-item-btn_opened */
    /* categories */
    const categoryItems = document.querySelector('.categories__c-cards')
    const btns = document.querySelectorAll('.categories__c-item-btn')
    
    btns.forEach((btn) => {
        btn.addEventListener('click', (ev) => {

            if (ev.currentTarget.classList.contains('categories__c-item-btn_opened')) {
                btns.forEach((el) => el.classList.remove('categories__c-item-btn_opened'))
                categoryItems.classList.remove('categories__c-cards_opened')


            } else {
                btns.forEach((el) => el.classList.remove('categories__c-item-btn_opened'))
                ev.currentTarget.classList.add('categories__c-item-btn_opened')
                categoryItems.classList.add('categories__c-cards_opened')
            }

        })
    })
    /* categories */



}, false);


