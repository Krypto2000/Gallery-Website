document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.second-box').classList.toggle('active');
});
document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.second-box').classList.remove('active');
});