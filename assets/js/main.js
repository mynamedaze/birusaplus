jQuery(document).ready(function () {
  if (jQuery('.natural')) {

    jQuery(".brands__list").owlCarousel({
      responsive: {
        0: {
          items: 2,
          margin: 10,
          loop: true,
          dots: false
        },
        992: {
          items: 5,
          mouseDrag: false,
          touchDrag: false
        }
      }
    });

  }

});