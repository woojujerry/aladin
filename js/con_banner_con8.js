/***배너 생성***/
//bn1
$(function(){
    $(".con8-bn1")
    .eq(0).append("<div><img src='img/11.con_8/1.jpg>>/div>")
    .eq(1).append("<div><img src='img/11.con_8/2.jpg>/div>")
    .eq(2).append("<div><img src='img/11.con_8/3.jpg>/div>");
});
//bn2
$(function(){
    $(".con8-bn2")
    .eq(0).append("<img src='img/11.con_8/4.jpg>")
    .eq(1).append("<img src='img/11.con_8/5.jpg>")
    .eq(2).append("<img src='img/11.con_8/6.jpg>");
});

/***배너 실행***/
$(document).ready(function slide(){
    $(".con8-bn-wrap").stop().animate({marginLeft: -1030}, function(){
        $(".con8-bn-wrap > div:first").appendTo(".con8-bn-wrap");
        $(".con8-bn-wrap").css({marginLeft: 0});
    });
    setInterval (slide, 5000);
});