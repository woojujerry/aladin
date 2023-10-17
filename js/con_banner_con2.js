$(document).ready(function slide(){
    $(".con2-bn").stop().animate({marginLeft: -190}, function(){
        $(".con2-bn > div:first").appendTo(".con2-bn");
        $(".con2-bn").css({marginLeft: 0});
    });

    setInterval (slide, 3000);
});