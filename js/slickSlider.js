$('.banner').slick({
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});

$('.product-slider').slick({
    Infinity:true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
})

