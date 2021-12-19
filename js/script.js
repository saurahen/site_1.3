// if (window.matchMedia('(max-width: 767px)').matches) {
//   const swiper = new Swiper('.swiper', {
//     // Навигация
//     // Буллеты, текущее полодение, прогрессбар
//     pagination: {
//       el: '.swiper-pagination',
//       // Буллеты
//       clickable: true,
//     },
//     slidesPerView: 'auto',
//     spaceBetween: 1,
//   });
// }

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  });
}

if (matchMedia) {
  var screen = window.matchMedia('(max-width: 767px)');
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  if (screen.matches) {
    initSwiper();
  }
}

let swiperWrapper = document.querySelector('.swiper-wrapper');
let showMorebtn = document.querySelector('.read-more-button');

showMorebtn.addEventListener('click', function () {
  showMorebtn.classList.toggle('read-more-button--active');
  swiperWrapper.classList.toggle('swiper-wrapper--open');
  console.log(showMorebtn);
  if (showMorebtn.classList.contains('read-more-button--active')) {
    showMorebtn.textContent = 'Скрыть';
  } else {
    showMorebtn.textContent = 'Показать все';
  }
});
