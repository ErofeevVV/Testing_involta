import * as $ from "jquery"   //импорт библиотеки jQueryy
import 'slick-carousel/slick/slick.css'   //подключение стилей карусели slick
import 'slick-carousel'   //импорт карусели slick
import '@/styles/index.scss'    //подключение собственных стилей


//обработка события ширины экрана
window.addEventListener('resize', () => {
  updateSlickCarousel(document.body.parentElement.clientWidth);
})

updateSlickCarousel(document.body.parentElement.clientWidth);

//включение карусели slick
let slickInstance;

function updateSlickCarousel(screenWidth){
  if(screenWidth < 1024){
    if(!slickInstance){
      slickInstance = $('.cv-carousel').slick({

        responsive: [{
          breakpoint: 1024,   //брекпоинт на ширину экрана 1024px
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
            breakpoint: 768,    //брекпоинт на ширину экрана 768px
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

//выключение карусели slick
  else{
    if(slickInstance){
      $('.cv-carousel').slick('unslick');
      slickInstance = null
    }
  }
}
