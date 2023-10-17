$(document).ready(function(){
    /***top ad close***/
    $(".close").click(function () {
        $("#top").hide();
    });


    /***contents1***/
    //con1 right banner - image two
    $(".con1-prev2").click(function () {
        $(".con1-bns div:last").prependTo(".con1-bns");
        $(".con1-bns").css({ marginLeft: -305 });
        $(".con1-bns").stop().animate({ marginLeft: 0 });
    });

    $(".con1-next2").click(function () {
        $(".con1-bns").stop().animate({ marginLeft: -305 }, function () {
            $(".con1-bns div:first").appendTo(".con1-bns");
            $(".con1-bns").css({ marginLeft: 0 });
        });
    });

    /*con1 left book - editor pick, ebook etc*/
    //con1-bot1
    if ($(".con1-bot1").show()) {
        $(".con1-prev").click(function () {
            $(".con1-bot1 > div:last").prependTo(".con1-bot1");
            $(".con1-bot1").css({ marginLeft: -687 });
            $(".con1-bot1").stop().animate({ marginLeft: 0 });
        });

        $(".con1-next").click(function () {
            $(".con1-bot1").stop().animate({ marginLeft: -687 }, function () {
            $(".con1-bot1 > div:first").appendTo(".con1-bot1");
            $(".con1-bot1").css({ marginLeft: 0 });
            });
        });
    }

    //con1-bot2
    if ($(".con1-bot2").show()){
        $(".con1-prev").click(function () {
            $(".con1-bot2 > div:last").prependTo(".con1-bot2");
            $(".con1-bot2").css({ marginLeft: -687 });
            $(".con1-bot2").stop().animate({ marginLeft: 0 });
        });

        $(".con1-next").click(function () {
            $(".con1-bot2").stop().animate({ marginLeft: -687 }, function () {
            $(".con1-bot2 > div:first").appendTo(".con1-bot2");
            $(".con1-bot2").css({ marginLeft: 0 });
            });
        });
    }

    //con1-bot3
    if ($(".con1-bot3").show()){
        $(".con1-prev").click(function () {
            $(".con1-bot3 > div:last").prependTo(".con1-bot3");
            $(".con1-bot3").css({ marginLeft: -687 });
            $(".con1-bot3").stop().animate({ marginLeft: 0 });
        });

        $(".con1-next").click(function () {
            $(".con1-bot3").stop().animate({ marginLeft: -687 }, function () {
            $(".con1-bot3 > div:first").appendTo(".con1-bot3");
            $(".con1-bot3").css({ marginLeft: 0 });
            });
        });
    }

    //con1-bot4
    if ($(".con1-bot4").show()){
        $(".con1-prev").click(function () {
            $(".con1-bot4 > div:last").prependTo(".con1-bot4");
            $(".con1-bot4").css({ marginLeft: -687 });
            $(".con1-bot4").stop().animate({ marginLeft: 0 });
        });

        $(".con1-next").click(function () {
            $(".con1-bot4").stop().animate({ marginLeft: -687 }, function () {
            $(".con1-bot4 > div:first").appendTo(".con1-bot4");
            $(".con1-bot4").css({ marginLeft: 0 });
            });
        });
    }


    /***contents3 center banner***/
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


    /***contents4 book - wizard choice***/
    $(".con4-prev").click(function () {
        $(".con4-bk-wrap > div:last").prependTo(".con4-bk-wrap");
        $(".con4-bk-wrap").css({ marginLeft: -1030 });
        $(".con4-bk-wrap").stop().animate({ marginLeft: 0 });
    });

    $(".con4-next").click(function () {
        $(".con4-bk-wrap").stop().animate({ marginLeft: -1030 }, function () {
            $(".con4-bk-wrap > div:first").appendTo(".con4-bk-wrap");
            $(".con4-bk-wrap").css({ marginLeft: 0 });
        });
    });

    /***contents5 - hot book***/
    $(".con5-prev").click(function () {
        $(".con5-bk-wrap > div:last").prependTo(".con5-bk-wrap");
        $(".con5-bk-wrap").css({ marginLeft: -1030 });
        $(".con5-bk-wrap").stop().animate({ marginLeft: 0 });
    });

    $(".con5-next").click(function () {
        $(".con5-bk-wrap").stop().animate({ marginLeft: -1030 }, function () {
            $(".con5-bk-wrap > div:first").appendTo(".con5-bk-wrap");
            $(".con5-bk-wrap").css({ marginLeft: 0 });
        });
    });


    /***contents6 - made in aladin***/
    $(".con6-prev").click(function () {
        $(".con6-gd-wrap > div:last").prependTo(".con6-gd-wrap");
        $(".con6-gd-wrap").css({ marginLeft: -1030 });
        $(".con6-gd-wrap").stop().animate({ marginLeft: 0 });
    });

    $(".con6-next").click(function () {
        $(".con6-gd-wrap").stop().animate({ marginLeft: -1030 }, function () {
            $(".con6-gd-wrap > div:first").appendTo(".con6-gd-wrap");
            $(".con6-gd-wrap").css({ marginLeft: 0 });
        });
    });


    /***contents7 - aladin special***/
    $(".con7-prev").click(function () {
        $(".con7-sp-wrap > div:last").prependTo(".con7-sp-wrap");
        $(".con7-sp-wrap").css({ marginLeft: -1030 });
        $(".con7-sp-wrap").stop().animate({ marginLeft: 0 });
    });

    $(".con7-next").click(function () {
        $(".con7-sp-wrap").stop().animate({ marginLeft: -1030 }, function () {
            $(".con7-sp-wrap > div:first").appendTo(".con7-sp-wrap");
            $(".con7-sp-wrap").css({ marginLeft: 0 });
        });
    });


    /***contents9 - note***/
    $(".con9-prev").click(function () {
        $(".con9-nt-wrap > div:last").prependTo(".con9-nt-wrap");
        $(".con9-nt-wrap").css({ marginLeft: -1030 });
        $(".con9-nt-wrap").stop().animate({ marginLeft: 0 });
    });

    $(".con9-next").click(function () {
        $(".con9-nt-wrap").stop().animate({ marginLeft: -1030 }, function () {
            $(".con9-nt-wrap > div:first").appendTo(".con9-nt-wrap");
            $(".con9-nt-wrap").css({ marginLeft: 0 });
        });
    });
});