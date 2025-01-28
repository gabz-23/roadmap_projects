const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const items = document.querySelectorAll('.dropdown-content a');

dropdownBtn.addEventListener('click', () => {
    if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'flex';
    }
});

items.forEach((item) => {
    item.addEventListener('click', () => {
        items.forEach((item) => {
            item.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});
