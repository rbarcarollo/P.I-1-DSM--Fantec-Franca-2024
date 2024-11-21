document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-images img');
        if (index >= slides.length) currentSlide = 0;   
        if (index < 0) currentSlide = slides.length - 1; 

        slides.forEach((slide, i) => {
            slide.classList.remove('active'); 
        });
        slides[currentSlide].classList.add('active'); 
    }

    window.changeSlide = function(direction) { 
        currentSlide += direction;
        showSlide(currentSlide);
    };

    
    showSlide(currentSlide);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    responseMessage.classList.remove('hidden');

 
    document.getElementById('contactForm').reset();
});


document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

