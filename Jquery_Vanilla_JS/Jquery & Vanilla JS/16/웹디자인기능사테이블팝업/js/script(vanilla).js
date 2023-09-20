var modal = document.querySelector('#modal');
document.querySelector('.partner_info img').addEventListener('click', function () {
    modal.classList.add('active');
});
document.querySelector('button').addEventListener('click', function () {
    modal.classList.remove('active');
});
