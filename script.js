document.querySelector(".right-btn").addEventListener("click", () => {
    let container = document.querySelector(".cards-container");
    container.scrollBy({
        left: container.offsetWidth, /* Прокрутка на повну ширину контейнера */
        behavior: "smooth" /* Плавна анімація */
    });
});

document.querySelector(".left-btn").addEventListener("click", () => {
    let container = document.querySelector(".cards-container");
    container.scrollBy({
        left: -container.offsetWidth, /* Прокрутка в зворотному напрямку */
        behavior: "smooth"
    });
});
