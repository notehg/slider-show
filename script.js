document.addEventListener("DOMContentLoaded", function () {
    // Obtém todas as entradas do tipo radio e os botões de navegação
    const radioBtns = document.querySelectorAll('input[type="radio"]');
    const manualBtns = document.querySelectorAll('.manual-btn');

    let currentSlide = 0; // Inicializa o slide atual

    // Função para exibir o slide especificado
    function showSlide(slideIndex) {
        // Remove a classe 'active' de todos os radio buttons
        radioBtns.forEach((radio) => {
            radio.classList.remove('active');
        });

        // Define o radio button correto como 'checked'
        radioBtns[slideIndex].checked = true;
        radioBtns[slideIndex].classList.add('active');

        // Calcula a largura do slide a ser exibido
        const slideWidth = -slideIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${slideWidth}%)`;
    }

    // Adiciona um ouvinte de clique aos botões de navegação manuais
    manualBtns.forEach((manualBtn, index) => {
        manualBtn.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % radioBtns.length;
        showSlide(currentSlide);
    }

    // Adiciona um ouvinte de clique para o botão de avançar
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    // Inicialmente, exibe o primeiro slide
    showSlide(currentSlide);

    // Defina um temporizador para avançar automaticamente os slides
    setInterval(nextSlide, 5000); // Troque 5000 pelo intervalo desejado em milissegundos
});
