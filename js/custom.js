//Bannar Slider
$('.banner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow: '.banner-prev',
  nextArrow: '.banner-next',
  speed:1500,
  fade:true,
  responsive:[
    {
      breakpoint: 576,
      settings: {
        arrows:false,
      }
    },
  ]
});

//destination part slider
$('.spain-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.desti-prev',
    nextArrow: '.desti-next',
    speed:1500,
    responsive:[
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.dubai-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.dubai-prev',
    nextArrow: '.dubai-next',
    speed:1500,
  });
  $('.italy-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.italy-prev',
    nextArrow: '.italy-next',
    speed:1500,
  });
  $('.frence-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.frence-prev',
    nextArrow: '.frence-next',
    speed:1500,
  });
  $('.sweizerland-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.sweizerland-prev',
    nextArrow: '.sweizerland-next',
    speed:1500,
  });


  //review part slider
  $('.review-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    speed:1500,
    dots:true,
    loop:true,
    responsive:[
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  //About Part Tour Guide Slider
  $('.guide-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.guide-arrows-prev',
    nextArrow: '.guide-arrows-next',
    speed:1500,
  });