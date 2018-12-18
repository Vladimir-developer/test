$(document).ready(function(){
    $('.screenshots-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        centerMode: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            },

          ]
    });
    
    function setScaled(){
        $('.screenshot-slide.slick-current').prev().prev().prev().addClass('scaled');
        $('.screenshot-slide.slick-current').prev().prev().addClass('scaled');
        $('.screenshot-slide.slick-current').prev().addClass('scaled');
        $('.screenshot-slide.slick-current').addClass('scaled');
        $('.screenshot-slide.slick-current').next().addClass('scaled');
        $('.screenshot-slide.slick-current').next().next().addClass('scaled');
        $('.screenshot-slide.slick-current').next().next().next().addClass('scaled');
    }
    
    setScaled();
    
    $(".screenshots-slider").on("afterChange", function (){
        $('.screenshot-slide').removeClass('scaled');
        setScaled();
    });
    
    $('.testimonials-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });
    
    $('.tgl-btn').click(function(){
        $('.header-menu').toggle(200);
    });
});
