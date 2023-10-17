$(document).ready(function () {
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
});