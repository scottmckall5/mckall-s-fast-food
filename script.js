document.addEventListener('DOMContentLoaded', function () {
    const checkBtn = document.querySelector('.checkbtn');
    const menu = document.querySelector('nav ul');
    const check = document.querySelector('#check');

    checkBtn.addEventListener('click', function () {
        check.checked = !check.checked;
        menu.style.display = check.checked ? 'block' : 'none';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            check.checked = false;
            menu.style.display = '';
        }
    });
});
