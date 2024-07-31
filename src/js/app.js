
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

    //anchor
    const anchors = document.querySelectorAll('.nav-js');

    anchors.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.querySelector('.mobile-menu').classList.contains('active')) {
                document.querySelector('.mobile-menu').classList.remove('active');
                document.querySelector('body').classList.remove('not-scroll');
            }
            const id = item.getAttribute('href');
            const headerHeight = document.querySelector('.header').clientHeight;
            window.scrollTo({
                behavior: 'smooth',
                top: document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - headerHeight - 50
            })
        })
    });

    //open certificate
    // lightGallery(document.getElementById('vue-certificate', {
    //     selector: '.link',
    // }));
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    //open works
    lightGallery(document.getElementById('works'), {
        plugins: [lgZoom],
        selector: '.works__img',
        showZoomInOutIcons: true
    });

    //swiper skills
    // if (window.innerWidth >= 1024) {
    //     const swiperSkills = new Swiper('.swiper-skills', {
    //         slidesPerView: 'auto',
    //         spaceBetween: 40,
    //         // grabCursor: true
    //         loop: true,
    //         centeredSlides: true,
    //         speed: 6000,
    //         autoplay: {
    //             delay: 0.1,
    //         },
    //         allowTouchMove: false,
    //         disableOnInteraction: true
    //     })
    // }
});


