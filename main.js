const circle = document.querySelector('.circle');

circle.addEventListener('mouseenter', () => {
    // Inclina a "base" (bola) para melhorar a visão dos cards deitados
    circle.style.transform = 'rotateX(20deg)';
});

circle.addEventListener('mouseleave', () => {
    // Volta ao plano normal
    circle.style.transform = 'rotateX(0deg)';
});

// Adiciona um pequeno efeito de brilho nos cards ao clicar
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.filter = 'brightness(1.5) saturate(1.2)';
    });
    card.addEventListener('mouseup', () => {
        card.style.filter = 'brightness(1)';
    });
});