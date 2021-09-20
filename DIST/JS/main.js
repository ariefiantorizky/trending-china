const navBtn = document.getElementById("navbar-btn");
const nav = document.querySelector("nav.navbar-brand");
navBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-left");
})


const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperScroll = new Swiper(".swiper-scroll", {
    slidesPerView: 7,
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },
    breakpoints: {
        1300: {
            slidesPerView: 9,
        },
        1200: {
            slidesPerView: 6,
        },
        942: {
            slidesPerView: 5,
        },
        635: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        250: {
            slidesPerView: 2,
        }
    }
});