$(document).ready(function(){
  $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 1800, // Tiempo de espera entre imágenes en milisegundos
      dots: true, // Muestra los puntos de navegación
      infinite: true, // Permite que el carrusel vuelva a empezar al llegar a la última imagen
      centerMode: true, // Centra las imágenes en el carrusel
      variableWidth: true // Permite que las imágenes mantengan su ancho original
  });
});