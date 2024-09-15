document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
});
