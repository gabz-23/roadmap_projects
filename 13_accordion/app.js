const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('click', () => {
        const questionBefore = item.querySelector('.question');
        questionBefore.classList.toggle('active');

        items.forEach((item) => {
            const afterQuestion = item.querySelector('.question');
            if (questionBefore !== afterQuestion) {
                afterQuestion.classList.remove('active');
            }
        });
    });
});
