document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.img-slide a');

    // Adiciona um ouvinte de clique a cada imagem
    slides.forEach((slide) => {
        slide.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const link = this.getAttribute('href');
            window.location.href = link; // Navega para a página vinculada
        });
    });
});
