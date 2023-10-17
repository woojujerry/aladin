$(document).ready(function(){
    //sub2-preivew-box 북커버 미리보기
    $(".bookcover-prevBtn").click(function () {
        $(".preview-box > div:last").prependTo(".preview-box");
        $(".preview-box").css({ marginLeft: -510 });
        $(".preview-box").stop().animate({ marginLeft: 0 });
    });

    $(".bookcover-nextBtn").click(function () {
        $(".preview-box").stop().animate({ marginLeft: -510 }, function () {
            $(".preview-box > div:first").appendTo(".preview-box");
            $(".preview-box").css({ marginLeft: 0 });
        });
    });

    //sub5-card
    $(".sub5-prevBtn").click(function () {
        $(".sub5-card > div:last").prependTo(".sub5-card");
        $(".sub5-card").css({ marginLeft: -700 });
        $(".sub5-card").stop().animate({ marginLeft: 0 });
    });

    $(".sub5-nextBtn").click(function () {
        $(".sub5-card").stop().animate({ marginLeft: -700 }, function () {
            $(".sub5-card > div:first").appendTo(".sub5-card");
            $(".sub5-card").css({ marginLeft: 0 });
        });
    });


    //sub6-checkbox
    $(".sub6-checkbox").click(function(){
        $("#sub6-checkImg").css("src", "img/16.sub/0.icon/icon_check_on.png");
    })


    //sub7-dot-btn
    $(".sub7-dot1").css("background-color", "#000");
    $(".sub7-dot2").click(function () {
        $(this).css("background-color", "#000");
        $(".sub7-rt-ad > div:last").stop().show();
        $(".sub7-rt-ad > div:first").stop().hide();
        $(".sub7-dot1").css("background-color", "#bbb");
    });

    $(".sub7-dot1").click(function () {
        $(this).css("background-color", "#000");
        $(".sub7-rt-ad > div:first").stop().show();
        $(".sub7-rt-ad > div:last").stop().hide();
        $(".sub7-dot2").css("background-color", "#bbb");
    });

    //sub-fix
    $("#adclose").click(function(){
        $("#sub-fix").stop().hide();
    });
});