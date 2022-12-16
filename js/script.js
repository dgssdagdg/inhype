const swiper = new Swiper('.frame-two-slider-one', {
    loop: true,
  
    navigation: {
      nextEl: '.frame-button-next',
      prevEl: '.frame-button-prev',
    },
});
const swiperTwo = new Swiper('.frame-two-slider-two', {
    loop: true,
    autoplay: {
        delay: 1000,
      },
});

window.addEventListener('click', function(event) {
    let menu = document.querySelector('.menu');
    let menuBlock = document.querySelector('.menu-block');
    if (event.target.closest('.menu-btn')) {
        menu.classList.toggle('active');
        menuBlock.classList.toggle('block-active');
    }
})