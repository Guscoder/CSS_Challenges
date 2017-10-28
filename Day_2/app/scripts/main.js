$(document).ready(function(){

  $('.menu-icon').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.bar').removeClass('no-animation');
  });

});