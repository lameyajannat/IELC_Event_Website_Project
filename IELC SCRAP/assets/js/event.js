const swiper = new Swiper('.work-carsouel .swiper-container', {
    loop: true, // Enable infinite loop
    slidesPerView: 'auto', // Allows variable widths
    spaceBetween: 10, // Matches CSS margin-right
    centeredSlides: true, // Keeps active slide centered
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}); 