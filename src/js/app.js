
document.addEventListener('DOMContentLoaded', function () {
    //open mobile menu
    let burger = document.getElementById('burger');
    let mobileMenu = document.getElementsByClassName('mobile-menu');
    if (burger) {
        burger.addEventListener('click', function () {
            mobileMenu[0].classList.add('active');
            document.querySelector('body').classList.add('not-scroll');
        });
    }

    //close mobile menu
    let close = document.getElementById('closeMobile');
    if (close) {
        close.addEventListener('click', function () {
            mobileMenu[0].classList.remove('active');
            document.querySelector('body').classList.remove('not-scroll');
        });
    }

    //open certificate
    lightGallery(document.getElementById('animated-thumbnails'));
});


