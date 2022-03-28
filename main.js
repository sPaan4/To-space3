$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__Arrow slider__Arrow2" src="images/Arrow2.svg" alt="Arrow2">',
        nextArrow: '<img class="slider__Arrow slider__Arrow1" src="images/Arrow1.svg" alt="Arrow1">',  
        responsive: [
            {
              breakpoint: 481,
              settings: {
               arrows: false
                }
            }
        ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active')
    })
});