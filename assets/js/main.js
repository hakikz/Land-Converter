// Initialize Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Toggle Mobile Nav

jQuery(document).ready(function($){

  $('#toogleNav').on('click', function(){
    $('.mobile-nav').removeClass('hide-mobile-nav');
    $('body').addClass('blur-body');
  });

  $('#closeNav').on('click', function(){
    $('.mobile-nav').addClass('hide-mobile-nav');
    $('body').removeClass('blur-body');
  });

});