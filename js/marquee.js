window.addEventListener("DOMContentLoaded", function () {

    /* бегущая строка */
    document.querySelectorAll('.marquee__i-list')
        .forEach((container) => {
            const element = container.querySelector('.marquee__i-el').outerHTML

            for (let i = 0; i < 50; i++) {
                container.innerHTML += element;
            }
        })
    /* бегущая строка */






}, false);


