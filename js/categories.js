window.addEventListener("DOMContentLoaded", function () {

    /* categories */
    const categoryItems = document.querySelector('.categories__c-cards')
    document.querySelectorAll('.categories__c-item-btn')
        .forEach((btn) => {
            btn.addEventListener('click', () => {
                categoryItems.classList.toggle('categories__c-cards_opened')
            })
        })
    /* categories */



}, false);


