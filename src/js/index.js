import '../scss/style.scss';

if (window.innerWidth < 768) {
    new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicMainBullets: 5,
        },
        grabCursor: true,
    
        mousewheel: {
            sensitivity:1,
        },
        slidesPerView: 1.15,
        slidesPerColumn: 1.15,
        spaceBetween: 20,
    }); 
}

const expandBottom = document.querySelector('.button-read__expandBottom');
const expandTop = document.querySelector('.button-read__expandTop');
const mainContentP = document.querySelector('.main-content__p:nth-child(2)');

expandBottom.addEventListener('click', function () {
    mainContentP.style.display = 'inline-block';
    expandBottom.style.display = 'none';
    expandTop.style.display = 'block';
    console.log('1')
});

expandTop.addEventListener('click', function () {
    mainContentP.style.display = 'none';
    expandBottom.style.display = 'block';
    expandTop.style.display = 'none';
    console.log('2')
});

const swiper = document.querySelector('.swiper');
const buttonSwiperBottom = document.querySelector('.button-swiperBottom');
const buttonSwiperTop = document.querySelector('.button-swiperTop');

buttonSwiperBottom.addEventListener('click', function() {
    swiper.style.height = 100+'%';
    buttonSwiperBottom.style.display = 'none';
    buttonSwiperTop.style.display = 'block';
})

buttonSwiperTop.addEventListener('click', function() {
    swiper.style.height = 181+'px';
    buttonSwiperBottom.style.display = 'block';
    buttonSwiperTop.style.display = 'none';
})

const swiperHeight2 = document.querySelector('.swiper--height2');
const buttonSwiperBottom2 = document.querySelector('.button-swiperBottom2');
const buttonSwiperTop2 = document.querySelector('.button-swiperTop2');

buttonSwiperBottom2.addEventListener('click', function() {
    swiperHeight2.style.height = 100+'%';
    buttonSwiperBottom2.style.display = 'none';
    buttonSwiperTop2.style.display = 'block';
})

buttonSwiperTop2.addEventListener('click', function() {
    swiperHeight2.style.height = 176+'px';
    buttonSwiperBottom2.style.display = 'block';
    buttonSwiperTop2.style.display = 'none';
})


const headerButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const blurBlock = document.querySelector('.blur-block');

headerButton.addEventListener('click', function() {
    menu.style.transform = `translateX(${0}%)`;
    blurBlock.style.display = 'block';
})

menuClose.addEventListener('click', function() {
    menu.style.transform = `translateX(${-130}%)`;
    blurBlock.style.display = 'none';
})

const socialBlockLinkWrite = document.querySelectorAll('.social-block__link--write');
const feedBack = document.querySelector('.feedback');
const feedbackClose = document.querySelector('.feedback__close');
 
for (let i=0; i < socialBlockLinkWrite.length; i++) {
    socialBlockLinkWrite[i].addEventListener('click', function() {
        feedBack.style.transform = `translateX(${0}px)`;
        blurBlock.style.display = 'block';
    })
}

feedbackClose.addEventListener('click', function() {
    feedBack.style.transform = `translateX(${500}px)`;
    if ((window.getComputedStyle(menu, null).transform !== 'matrix(1, 0, 0, 1, 0, 0)')
    || (window.getComputedStyle(menu, null).position === 'static')) {
        blurBlock.style.display = 'none';
    }
})

const feedBackTell = document.querySelector('.feedback--tell');
const socialBlockLinkTell = document.querySelectorAll('.social-block__link--tell');
const feedbackCloseTell = document.querySelector('.feedback__close--tell');

for (let i = 0; i < socialBlockLinkTell.length; i++) {
    socialBlockLinkTell[i].addEventListener('click', function() {
        feedBackTell.style.transform = `translateX(${0}px)`;
        blurBlock.style.display = 'block';
    })
}

feedbackCloseTell.addEventListener('click', function() {
    feedBackTell.style.transform = `translateX(${500}px)`;
    if ((window.getComputedStyle(menu, null).transform !== 'matrix(1, 0, 0, 1, 0, 0)')
    || (window.getComputedStyle(menu, null).position === 'static'))
    {
        blurBlock.style.display = 'none';
    }
    
})

blurBlock.addEventListener('click', function() {
    if (window.getComputedStyle(menu, null).position !== 'static') {
        menu.style.transform = `translateX(${-130}%)`;
        feedBack.style.transform = `translateX(${500}px)`;
        feedBackTell.style.transform = `translateX(${500}px)`;
        blurBlock.style.display = 'none';
    } else {
        feedBack.style.transform = `translateX(${500}px)`;
        feedBackTell.style.transform = `translateX(${500}px)`;
        blurBlock.style.display = 'none';
    }
})

