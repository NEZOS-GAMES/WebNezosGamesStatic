/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* Agregar active al dar click en el menu del header */

$("#menu li a").on('click', function (e) {
  $("#menu .active").removeClass('active');
  $(this).parent().addClass('active');
});

/* Alteramos el header cuando tiene sticky */
const el = document.querySelector(".navbar-default")
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }  
);

observer.observe(el);