window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    let BlkStyle = document.querySelector('.main_header')
    if(html.scrollTop>100||body.scrollTop>100) {
        BlkStyle.classList.add('main_header-fix');
    } else BlkStyle.classList.remove('main_header-fix');
}


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
    let body = document.body;
    let menu = document.querySelector('.menu');
    let menuBlock = document.querySelector('.menu-block');
    if (event.target.closest('.menu-close')) {
        menu.classList.toggle('active');
        menuBlock.classList.toggle('block-active');
        body.classList.toggle('overflow');
    }
    let city = document.querySelector('.city');
    if (event.target.closest('.city-open')) {

        city.classList.toggle('city-active');
        body.classList.toggle('overflow');
    } else  if (!event.target.closest('.city-row') && city.closest('.city-active')) {
        city.classList.remove('city-active')
        body.classList.remove('overflow');
    }
    return false;
})
