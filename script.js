document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '250px';
    } else {
        menu.style.width = '0'
    }
});

windows.addEventListener('resize', function() {
    const menu = document.getElementById('hamburger');
    const hamburger = document.getElementById('menu');

    if(window.innerWidth > 768) {
        hamburger.style.display = 'none';
        menu.style.width = '0';
    } else {
        hamburger.style.display = 'block'
    }
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const successMessage = document.getElementById('success-message');

    form.reset();
    successMessage.hidden = false;
})


});

window.dispatchEvent(new Event('resize'))