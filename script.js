document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const interval = 3000; // Intervalo de troca de slides em milissegundos (3 segundos)

    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    setInterval(nextSlide, interval);

    // Event listeners para botões de navegação
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            prevSlide();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextSlide();
        });
    }
});
