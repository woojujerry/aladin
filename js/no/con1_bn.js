$(document).ready(function () {
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
});
