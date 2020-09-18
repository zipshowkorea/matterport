$(document).ready(function(){
    
  $(window).on("load", function (event) {
  $(".preloader").delay(500).fadeOut(500);
  });
    
    var showcase = $('#showcase')
    var playBtn = $('.play_button_image')
    $(playBtn).click(function(){
        $(showcase).css({'z-index':1})
    });
});
