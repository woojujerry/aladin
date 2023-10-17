$(document).ready(function () {
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
});
