$(document).ready(function(){
    /***contents2 - 어제 베스트셀러 TOP 10 right ad***/
    $(function (){
        $(function slide1(){
            $(".con2-bn").stop().animate({marginLeft: -190}, function(){
                $(".con2-bn > div:first").appendTo(".con2-bn");
                $(".con2-bn").css({marginLeft: 0});
            });
        });
        setInterval (slide1, 3000);
    });

    /***contents8 - bottom ad banner***/
    /*bn 생성*/
    $(function(){
        //bn1
    $(function(){
        $(".con8-bn1")
        .eq(0).append("<div><img src='img/11.con_8/1.jpg>>/div>")
        .eq(1).append("<div><img src='img/11.con_8/2.jpg>/div>")
        .eq(2).append("<div><img src='img/11.con_8/3.jpg>/div>");
    });
    //bn2
    $(function (){
        $(".con8-bn2")
        .eq(0).append("<img src='img/11.con_8/4.jpg>")
        .eq(1).append("<img src='img/11.con_8/5.jpg>")
        .eq(2).append("<img src='img/11.con_8/6.jpg>");
    });
    })
    
    /*bn 실행*/
    $(function(){
        $(function slide2 (){
            $(".con8-bn-wrap").stop().animate({marginLeft: -1030}, function(){
                $(".con8-bn-wrap > div:first").appendTo(".con8-bn-wrap");
                $(".con8-bn-wrap").css({marginLeft: 0});
            });
        });
        setInterval (slide2, 5000);
    });
});