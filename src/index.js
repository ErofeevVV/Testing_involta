import * as $ from "jquery"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel'
// Test import of styles
import '@/styles/index.scss'



window.addEventListener('resize', () => {
  updateSlickCarousel(document.body.parentElement.clientWidth);
})

updateSlickCarousel(document.body.parentElement.clientWidth);

let slickInstance;

function updateSlickCarousel(screenWidth){
  if(screenWidth < 1024){
    if(!slickInstance){
      slickInstance = $('.cv-carousel').slick({

        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesPerRow: 2,
            verticalSwiping: true,
            dots: false,
            arrows: false,
            infinite: false,
            speed: 700,
            fade: true,
            cssEase: 'linear'
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesPerRow: 1,
              verticalSwiping: true,
              dots: false,
              arrows: false,
              infinite: false,
              speed: 700,
              fade: true,
              cssEase: 'linear'
            }
        }]

      });
    }
  }

  else{
    if(slickInstance){
      $('.cv-carousel').slick('unslick');
      slickInstance = null
    }
  }
}
