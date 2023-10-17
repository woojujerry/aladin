$(document).ready(function () {
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
});
