$(document).ready(function(){
    var showcase = $('#showcase')
    var playBtn = $('.play_button_image')
    $(playBtn).click(function(){
        $(showcase).css({'z-index':1})
    });
});