$(document).ready(function () {
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
});
