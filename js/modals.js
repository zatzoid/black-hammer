window.addEventListener("DOMContentLoaded", function () {

    /* modals */
    document.querySelectorAll('.modal-opener')
        .forEach((el) => {
            el.addEventListener('click', (ev) => {
                document.querySelector(`.modal-${ev.currentTarget.dataset.modal}`)
                    .classList.add('modal_opened')
            })
        })
    document.querySelectorAll('.modal-close')
        .forEach((el) => {
            el.addEventListener('click', (ev) => {
                ev.currentTarget.closest('.modal')
                    .classList.remove('modal_opened')
            })
        })
    /* modals */


}, false);


