$(document).ready(function(){
  $(window).resize(_.debounce(function(){
    if ($(window).width() > 736) {
      $('#MainMenu').slideUp();
    }
  }, 500));
  $('#MenuIcon').on('click', function(){
    $('#MainMenu').slideToggle();
  });
  $('#MainMenu > a').on('click', function(){
    $('#MainMenu').slideUp();
  });
})
