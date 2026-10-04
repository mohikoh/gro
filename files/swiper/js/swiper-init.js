document.addEventListener("DOMContentLoaded", function() {
   let sliderForPhonesButtons = document.querySelectorAll('.slider-for-phones__button')
   sliderForPhonesButtons.forEach(sliderForPhonesButton => {
      if (sliderForPhonesButton) {
         sliderForPhonesButton.classList.remove('after-page-loads')
      }
   })
})

let bannerSlider = document.querySelector('.bannerSlider__slider')
if (bannerSlider) {
   new Swiper(bannerSlider, {
      pagination: {
         el: '.bannerSlider__pagination',
         clickable: true,
      },
      navigation: {
         prevEl: '#banner-slider-btn-prev',
         nextEl: '#banner-slider-btn-next',
      },
      slidesPerView: 1.01,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      autoplay: {
         deley: 500,
         stopOnLastSlide: false,
         disableOnInteraction: true,
         pauseOnMouseEnter: true,
      },
      speed: 2000,
      effect: 'slide',
      fadeEffect: {
         crossFade: true
      },
      slideShadows: false,
      breakpoints: {
         0: {
            slidesPerView: 1.11,
            spaceBetween: 8,
         },
         576: {
            slidesPerView: 1.08,
            spaceBetween: 16,
         },
         1025: {
            slidesPerView: 1.01,
         }
      },
   });
}

let firstSlider = document.getElementById('first-slider')
if (firstSlider) {
   new Swiper(firstSlider, {
      navigation: {
         prevEl: '#first-slider-btn-prev',
         nextEl: '#first-slider-btn-next',
      },
      slidesPerView: 5,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2.38,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 3.3,
            spaceBetween: 10,
         },
         576: {
            slidesPerView: 3,
            spaceBetween: 10,
         },
         840: {
            slidesPerView: 4,
         },
         1025: {
            slidesPerView: 5,
            spaceBetween: 16,
         }
      },
   });
}

let secondSlider = document.getElementById('second-slider')
if (secondSlider) {
    new Swiper(secondSlider, {
        navigation: {
            prevEl: '#second-slider-btn-prev',
            nextEl: '#second-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let thirdSlider = document.getElementById('third-slider')
if (thirdSlider) {
   new Swiper(thirdSlider, {
      navigation: {
         prevEl: '#third-slider-btn-prev',
         nextEl: '#third-slider-btn-next',
      },
      slidesPerView: 5,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2.38,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 3.3,
            spaceBetween: 10,
         },
         576: {
            slidesPerView: 3,
            spaceBetween: 10,
         },
         840: {
            slidesPerView: 4,
         },
         1025: {
            slidesPerView: 5,
            spaceBetween: 16,
         }
      },
   });
}

let fourthSlider = document.getElementById('fourth-slider')
if (fourthSlider) {
    new Swiper(fourthSlider, {
        navigation: {
            prevEl: '#fourth-slider-btn-prev',
            nextEl: '#fourth-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let youCanPickItUpTodaySlider = document.querySelector('.you-can-pick-it-up-today-slider')
if (youCanPickItUpTodaySlider) {
    new Swiper(youCanPickItUpTodaySlider, {
        navigation: {
            prevEl: '#you-can-pick-it-up-today-slider-btn-prev',
            nextEl: '#you-can-pick-it-up-today-slider-btn-next',
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 800,
        effect: 'slide',
        breakpoints: {
            0: {
               slidesPerView: 2.38,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3.3,
               spaceBetween: 10,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            840: {
               slidesPerView: 4,
            },
            1025: {
               slidesPerView: 5,
               spaceBetween: 16,
            }
         },
    });
}

let sliderAboveCatalog = document.getElementById('slider-above-catalog')
if (sliderAboveCatalog) {
   new Swiper(sliderAboveCatalog, {
      navigation: {
         prevEl: '#slider-above-catalog-btn-prev',
         nextEl: '#slider-above-catalog-btn-next',
      },
      slidesPerView: 10,
      slidesPerGroup: 1,
      //spaceBetween: 5,
      watchOverflow: true,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 4.28,
         },
         461: {
            slidesPerView: 3.5,
         },
         576: {
            slidesPerView: 4,
         },
         1025: {
            slidesPerView: 8,
         },
         1281: {
            slidesPerView: 10,
         }
      },
   });
}

let pageProductWrapProductSliders = document.querySelector('.page-product__wrapProductSliders')
if (pageProductWrapProductSliders) {
   var swiper = new Swiper(".page-product__sliderSmall", {
      spaceBetween: 3,
      slidesPerView: 6,
      slidesPerGroup: 1,
      //freeMode: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: false,
      initialSlide: 1,
      breakpoints: {
         0: {
            slidesPerView: 5.32,
            spaceBetween: 9,
         },
         721: {
            slidesPerView: 4.35,
            spaceBetween: 3,
         },
         801: {
            slidesPerView: 5.35,
            spaceBetween: 12,
         },
         1025: {
            slidesPerView: 6,
            spaceBetween: 3,
         },
      },
   });
   var swiper2 = new Swiper(".page-product__sliderBig", {
      spaceBetween: 50,
      /*navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },*/
      initialSlide: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      thumbs: {
         swiper: swiper,
      },
   });
}

if (window.matchMedia("(max-width: 1099.98px)").matches) {
   let aPerfectCombinationSlider = document.querySelector('.a-perfect-combination__slider')
   if (aPerfectCombinationSlider) {
      new Swiper(aPerfectCombinationSlider, {
         slidesPerView: 4.7,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 30,
         loop: false,
         speed: 800,
         effect: 'slide',
         breakpoints: {
            0: {
               slidesPerView: 2.53,
               spaceBetween: 8,
            },
            576: {
               slidesPerView: 3.50,
               spaceBetween: 15,
            },
            /*768: {
               slidesPerView: 2.5,
               spaceBetween: 30,
            },*/
            790: {
               slidesPerView: 4.2,
               spaceBetween: 30,
            },
            /*961: {
               slidesPerView: 3.2,
               spaceBetween: 15,
            },*/
            1025: {
               slidesPerView: 3.5,
               spaceBetween: 15,
            },
         },
      });
   }
}

let pageProductColorsSlider = document.querySelector('.page-product__colorsSlider')
if (pageProductColorsSlider) {
   new Swiper(pageProductColorsSlider, {
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 8,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 5.30,
            spaceBetween: 8,
         },
         721: {
            slidesPerView: 4.5,
            spaceBetween: 12,
         },
         1025: {
            slidesPerView: 4,
            spaceBetween: 8,
         },
      },
   });
}

let aPerfectCombinationSlider = document.querySelector('.a-perfect-combination-slider')
if (aPerfectCombinationSlider) {
   new Swiper(aPerfectCombinationSlider, {
      autoHeight: true,
      slidesPerView: 3.58,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2.62,
            spaceBetween: 8,
         },
         576: {
            slidesPerView: 3.58,
            spaceBetween: 16,
         },
         721: {
            slidesPerView: 3.58,
            spaceBetween: 16,
            scrollbar: {
               el: '.swiper-scrollbar',
               draggable: true,
            },
         }
      },
   });
}

let productComparisonSlider = document.querySelector('.product-comparison__slider')
if (productComparisonSlider) {
   new Swiper(productComparisonSlider, {
      navigation: {
         prevEl: '#product-comparison-btn-prev',
         nextEl: '#product-comparison-btn-next',
      },
      autoHeight: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2,
            spaceBetween: 15,
         },
         661: {
            slidesPerView: 3,
            spaceBetween: 16,
         },
         801: {
            slidesPerView: 2,
            spaceBetween: 16,
         },
         900: {
            slidesPerView: 3,
            spaceBetween: 16,
         },
         1100: {
            slidesPerView: 4,
            spaceBetween: 16,
         }
      },
   });
}

let reviewsSlider = document.querySelector('.reviews__slider')
if (reviewsSlider) {
   new Swiper(reviewsSlider, {
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      speed: 800,
      effect: 'slide',
      pagination: {
         el: '#reviews-slider-swiper-pagination',
         clickable: true,
      },
      breakpoints: {
         0: {
            slidesPerView: 1.255,
         },
         576: {
            slidesPerView: 2,
         },
         861: {
            slidesPerView: 1,
         },
         1025: {
            slidesPerView: 2,
         },
         1201: {
            slidesPerView: 3,
         }
      },
   });
}

let videosSlider = document.querySelector('.videos-slider')
if (videosSlider) {
   new Swiper(videosSlider, {

      simulateTouch: true, // true / false
      // Чувствительность свайпа
      touchRation: 1, // По умолчанию 1 / 0 отключает перетаскивание на всех устройствах
      // Угол срабатывания свайпа/перетаскивания
      touchAngle: 45,
      // Курсор перетаскивания
      grabCursor: false, // true / false

      // Переключение при клике на слайд
      slideToClickedSlide: false,
      slidesPerView: 4,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      speed: 500,
            mousewheel: {
               sensitivity: 1,
               eventsTarget: ".videos-slider",
            },
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2.45,
            slidesPerGroup: 1,
            spaceBetween: 8,
         },
         481: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
            spaceBetween: 8,
         },
         684: {
            slidesPerView: 3,
            direction: 'vertical',
            slidesPerGroup: 1,
            autoHeight: true,
         },
         1025: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            direction: 'vertical',
         }
      },
   });
}

let airPodsSlider = document.getElementById('air-pods-slider')
if (airPodsSlider) {
   new Swiper(airPodsSlider, {
      navigation: {
         prevEl: '#air-pods-we-engrave-on-btn-prev',
         nextEl: '#air-pods-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}
let macBookSlider = document.getElementById('mac-book-slider')
if (macBookSlider) {
   new Swiper(macBookSlider, {
      navigation: {
         prevEl: '#mac-book-we-engrave-on-btn-prev',
         nextEl: '#mac-book-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}
let iphoneSlider = document.getElementById('iphone-slider')
if (iphoneSlider) {
   new Swiper(iphoneSlider, {
      navigation: {
         prevEl: '#iphone-we-engrave-on-btn-prev',
         nextEl: '#iphone-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}
let ipadSlider = document.getElementById('ipad-slider')
if (ipadSlider) {
   new Swiper(ipadSlider, {
      navigation: {
         prevEl: '#ipad-we-engrave-on-btn-prev',
         nextEl: '#ipad-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}
let airTagSlider = document.getElementById('air-tag-slider')
if (airTagSlider) {
   new Swiper(airTagSlider, {
      navigation: {
         prevEl: '#air-tag-we-engrave-on-btn-prev',
         nextEl: '#air-tag-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}
let dronesSlider = document.getElementById('drones-slider')
if (dronesSlider) {
   new Swiper(dronesSlider, {
      navigation: {
         prevEl: '#drones-we-engrave-on-btn-prev',
         nextEl: '#drones-we-engrave-on-btn-next',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 20,
      effect: 'slide',
   });
}

let relatedProducts = document.getElementById('related-products')
if (relatedProducts) {
   new Swiper(relatedProducts, {
      navigation: {
         prevEl: '#related-products-slider-btn-prev',
         nextEl: '#related-products-slider-btn-next',
      },
      slidesPerView: 5,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 16,
      loop: false,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2.255,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2.3,
            spaceBetween: 10,
         },
         681: {
            slidesPerView: 3.3,
            spaceBetween: 10,
         },
         900: {
            slidesPerView: 4.3,
         },
         1025: {
            slidesPerView: 5,
            spaceBetween: 16,
         }
      },
   });
}

let fromThisCategorySlider = document.getElementById('from-this-category-slider')
if (fromThisCategorySlider) {
   new Swiper(fromThisCategorySlider, {
      slidesPerView: 4,
      navigation: {
         prevEl: '#from-this-category-btn-prev',
         nextEl: '#from-this-category-btn-next',
      },
      slidesPerGroup: 1,
      watchOverflow: true,
      loop: false,
      speed: 800,
      spaceBetween: 16,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.21,
            spaceBetween: 12,
         },
         481: {
            slidesPerView: 2.3,
            spaceBetween: 16,
         },
         721: {
            slidesPerView: 3.3,
            spaceBetween: 16,
         },
         1025: {
            slidesPerView: 4,
            spaceBetween: 16,
         }
      },
   });
}