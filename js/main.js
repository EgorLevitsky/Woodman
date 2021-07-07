window.addEventListener('DOMContentLoaded', () => {

  // Header ------
  if (document.querySelector('#header-main')) {
    const header = document.querySelector('#header-main'),
        wrapper = document.querySelector('.wrapper'),
        headerPos = header.offsetTop;

  window.addEventListener('scroll', function() {
    let scrolled = this.pageYOffset;
    if (scrolled >= headerPos) {
      wrapper.classList.add('sticky');
    } else {
      wrapper.classList.remove('sticky');
    }
  });
  }

  // Sliders
  const mainScreen = new Swiper('.main-screen__slider', {
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const goods = new Swiper('.goods__slider', {
    autoHeight: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      375: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 23,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Offer modal ------
  const modalOffer = document.querySelector('#offer'),
      modalClose = document.querySelector('.modal__close');
  function showOffer() {
  modalOffer.classList.add('show');
  document.body.classList.add('no-scroll');
  }
  function closeOffer() {
  modalOffer.classList.remove('show');
  document.body.classList.remove('no-scroll');
  }

  modalClose.addEventListener('click', closeOffer);
  // setTimeout(showOffer, 8000);
});

// Burger --------
const burger = document.querySelector('#burger'),
      menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  this.classList.toggle('close');
});

document.addEventListener('DOMContentLoaded', () => {
  const cardThumbSlider = new Swiper('.card__thumb', {
    slidesPerView: 3,
    mousewheel: {
      sensitivity: 1,
    },
    thumbs: {
      swiper: {
        el: '.card__big-img',
      }
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
        direction: 'vertical',
        spaceBetween: 16,
      },
    }
  });

  const cardBigimgSlider = new Swiper('.card__big-img', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: {
        el: '.card__thumb',
      }
    },
  });
});


//  Filters -------
const filters = document.querySelectorAll('.catalog__filter-top');

if (filters) {
  filters.forEach((i) => {
    i.addEventListener('click', filterOpenToggle);
  });

  function filterOpenToggle() {
    const currentFilter = this.closest('.catalog__filter');
    currentFilter.classList.toggle('active');
  }
}


// Color filter
const colorFilter = document.querySelector('.catalog__filter-bottom'),
      colorFilterItem = document.querySelectorAll('[data-color]'),
      catalogItems = document.querySelectorAll('.catalog__grid-item'),
      catalogFilterClear = document.querySelector('.catalog__filter-clear');


colorFilterItem.forEach(i => {
  i.addEventListener('click', (e) => {
    catalogFilterClear.classList.add('show');
    colorFilterItem.forEach(i => i.classList.remove('active'));
    e.target.classList.add('active');
    let currentColor = i.dataset.color;
    catalogItems.forEach(i => {
      i.classList.remove('hide');
      if (!i.classList.contains(currentColor)) {
        i.classList.add('hide');
      } else {
        i.classList.remove('hide');
      }
    });
  });
});

if (catalogFilterClear) {
  catalogFilterClear.addEventListener('click', () => {
    colorFilterItem.forEach(i => i.classList.remove('active'));
    catalogItems.forEach(i => i.classList.remove('hide'));
    catalogFilterClear.classList.remove('show');
  });
}

const priceChekboxes = document.querySelectorAll('.custom-checkbox');

priceChekboxes.forEach(i => {
  i.querySelector('input').addEventListener('change', e => {
    let checkedInput = i.querySelector('input').checked;

    if(checkedInput) {
      let catalogPriceValue
    }
  });
})


// Stepper
const stepper = document.querySelector('.card__stepper'),
      stepperInput = document.querySelector('.card__stepper-input'),
      stepperMinus = document.querySelector('.btn--minus'),
      stepperPlus = document.querySelector('.btn--plus');

stepperInput.addEventListener('keydown', (e) => {
  if (e.currentTarget.value < 1) {
    stepperMinus.classList.add('btn--disabled');
    stepperPlus.classList.remove('btn--disabled');
  } else {
    stepperMinus.classList.remove('btn--disabled');
  }
  if (e.currentTarget.value > 99998) {
    stepperMinus.classList.remove('btn--disabled');
    stepperPlus.classList.add('btn--disabled');
  } else {
    stepperPlus.classList.remove('btn--disabled');
  }
});

stepperPlus.addEventListener('click', (e) => {
  let currentValue = parseInt(stepperInput.value);
  ++currentValue;
  stepperInput.value = currentValue;
  stepperMinus.classList.remove('btn--disabled');
  if (stepperInput.value > 99998) {
    stepperInput.value = 99999;
    stepperPlus.classList.add('btn--disabled');
  } else {
    stepperPlus.classList.remove('btn--disabled');
  }
});

stepperMinus.addEventListener('click', (e) => {
  let currentValue = parseInt(stepperInput.value);
  --currentValue;
  stepperInput.value = currentValue;
  stepperPlus.classList.remove('btn--disabled');
  if (stepperInput.value < 1) {
    stepperInput.value = 1;
    stepperMinus.classList.add('btn--disabled');
  } else {
    stepperMinus.classList.remove('btn--disabled');
  }
});

// Card slider
// const cardThumbs = document.querySelector('.card__thumb'),
//       cardBigImg = document.querySelector('.card__big-img');

// cardThumbs.addEventListener('click', (e) => {
//   if (e.target.classList.contains('card__thumb-item')) {
//     let currentSrc = e.target.querySelector('img').getAttribute('src');
//     cardBigImg.querySelector('img').setAttribute('src', currentSrc);
//   }
// });
