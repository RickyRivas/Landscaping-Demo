// Navigation 1
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");

function toggleNav() {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
}
burger.addEventListener('click', toggleNav)
navOverlay.addEventListener('click', toggleNav)

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: false,
    slidesPerView: 1,
    disableOnInteraction: true,
    centeredSlides: true,
    pagination: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next-custom",
        prevEl: ".swiper-prev-custom",
    },
});
    // Scroll to top logic
    const scrollToTopButton = document.getElementById("js-top");

    const scrollFunc = () => {
        let y = window.scrollY;
        if (y > 0) {
            scrollToTopButton.className = "top-link show";
        } else {
            scrollToTopButton.className = "top-link hide";
        }
    };

    window.addEventListener("scroll", scrollFunc);

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 10);
        }
    };

    scrollToTopButton.onclick = function (e) {
        e.preventDefault();
        scrollToTop();
    };