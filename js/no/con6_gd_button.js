$(document).ready(function () {
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
});