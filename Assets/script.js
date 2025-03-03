document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Afficher 1 image à la fois
        spaceBetween: 10, // Espacement entre les images
        loop: true, // Faire défiler en boucle

        autoplay: {
            delay: 3000, // Temps entre chaque slide (3000 ms = 3 sec)
            disableOnInteraction: false, // Permet à l'utilisateur de reprendre le contrôle après un clic
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});
