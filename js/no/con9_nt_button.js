$(document).ready(function () {
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