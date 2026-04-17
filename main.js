// Selecionando os cards para interações futuras
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // O CSS já faz o trabalho pesado, 
        // mas aqui você pode disparar sons ou efeitos de luz
        card.style.filter = "brightness(1.2)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.filter = "brightness(1)";
    });
});