$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.carousel').carousel({
    interval: 2000
  })
  $('#myCarousel').on('slide.bs.carousel', function () {
    // do something...
  })