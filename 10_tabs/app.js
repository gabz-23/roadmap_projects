const tabs = document.querySelectorAll('.tab');
const content = document.querySelector('#content');

const messages = {
    'first-tab': 'First Tab Content',
    'second-tab': 'Second Tab Content',
    'third-tab': 'Third Tab Content',
    'fourth-tab': 'Fourth Tab Content',
};

tabs[0].classList.add('active');
content.textContent = messages['first-tab'];

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tab.classList.add('active');
        content.textContent = messages[e.target.id];

        tabs.forEach((tab) => tab !== e.target && tab.classList.remove('active'));
    });
});
