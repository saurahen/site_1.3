if (window.matchMedia('screen and (max-width: 767px)').matches) {
  const swiper = new Swiper('.swiper', {
    // Навигация
    // Буллеты, текущее полодение, прогрессбар
    pagination: {
      el: '.swiper-pagination',
      // Буллеты
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  });
};

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
