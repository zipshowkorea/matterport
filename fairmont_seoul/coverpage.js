$(document).ready(function(){
    var showcase = $('#showcase')
    var playBtn = $('.play_button_image')
    $(playBtn).click(function(){
        //$(this).css({"background-image":"none"}).html("loading...");
        $(this).css({"background-image":"none"}).html("");
        setTimeout(function(){
            $(showcase).css({'z-index':1});
            $(".cover").css({"opacity":"0", "visibility":"hidden", "transition":"0.5s"});
        },1000)
    });

    if (window.innerWidth < 1024) {
        const tutorialClose = $('.tutorialClose');
        
        tutorialClose.click(function () {
            setTimeout(function(){
                $('#showcase').css({'z-index':1});
                $(".cover").css({"opacity":"0", "visibility":"hidden", "transition":"0.5s"});
            },1000);
        });
    }

});