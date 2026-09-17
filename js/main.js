// Select the button and the ul element
const menuToggle = document.getElementById('menuToggle');
const navUl = document.getElementById('navUl');

// Add a click event listener
menuToggle.addEventListener('click', () => {
    if (navUl.style.display === 'block') {
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'block';
    }
});

