$(document).ready(function(){
    $(".con3-prev").click(function(){
        $(".con3-bns > div:last").prependTo(".con3-bns");
        $(".con3-bns").css({marginLeft: 0});
        $(".con3-bns").stop().animate({marginLeft: 0});
        $(".con3-bgc > div:last").prependTo(".con3-bgc");
        $(".con3-bgc").css({marginLeft: 0});
        $(".con3-bgc").stop().animate({marginLeft: 0});
    });

    $(".con3-next").click(function(){
        $(".con3-bns").stop().animate({marginLeft: 0}, function(){
            $(".con3-bns > div:first").appendTo(".con3-bns");
            $(".con3-bns").css({marginLeft: 0});
            $(".con3-bgc > div:first").appendTo(".con3-bgc");
            $(".con3-bgc").css({marginLeft: 0});
            $(".con3-bgc").stop().animate({marginLeft: 0});
        });
    });
});