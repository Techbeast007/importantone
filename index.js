const faqItems = document.querySelectorAll('.section4-faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.section4-faq-question');

    question.addEventListener('click', () => {
        item.classList.toggle('active'); 
    });
});