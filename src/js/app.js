
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
    };

    //fixed header
    document.onscroll = function () {
        let scroll = window.scrollY;
        if (scroll > 400) {
            document.querySelector('.header').classList.add('fixed');
        }
        else {
            document.querySelector('.header').classList.remove('fixed');
        }
    }

    // const worksGallery = document.getElementById('works');
    // const certificateGallery = document.getElementById('certificate');

    // worksGallery.addEventListener('lgBeforeOpen', function () {
    //     document.querySelector('body').classList.add('not-scroll');
    // });
    // worksGallery.addEventListener('lgBeforeClose', function () {
    //     document.querySelector('body').classList.remove('not-scroll');
    // });

    // function closeM(gallery) {
    //     const worksGallery = document.getElementById(gallery);
    //     worksGallery.addEventListener('lgBeforeOpen', function () {
    //         document.querySelector('body').classList.add('not-scroll');
    //     });
    //     worksGallery.addEventListener('lgBeforeClose', function () {
    //         document.querySelector('body').classList.remove('not-scroll');
    //     });
    // }
    // closeM('works');

    //open certificate
    lightGallery(document.getElementById('animated-thumbnails'));

    //open works
    lightGallery(document.getElementById('works'), {
        plugins: [lgZoom],
        selector: '.works__img',
        showZoomInOutIcons: true
    });
});


