$(function(){
    var $index = 0;
    var item = $(".sub2-left .sub2-left-top .bookcover-preview .preview-box .preview-img");
    var max = item.length;

    $(".sub2-left .sub2-left-top .bookcover-btnRight span").on("click", function(){
        if($index < max - 1) {
            $index++;
            $(".sub2-left .sub2-left-top .bookcover-preview").removeClass("hidden");
            $(".sub2-left .sub2-left-top").css("overflow", "hidden");
            $("#bookFlip").addClass("hidden");
            var translateXValue = $index * -510 + "px";
            $(".sub2-left .sub2-left-top .bookcover-preview .preview-box").css("transform", "translateX(" + translateXValue + ")");
        } else if ($index == max - 1) {
            $("#lastImg").css("opacity", "1");
            setTimeout(function(){
                $("#lastImg").css("opacity", "0");
            }, 2000);
        }
    });

    $(".sub2-left .sub2-left-top .bookcover-btnLeft span").on("click", function(){
        if ($index > 0) {
            $index--;
            var translateXValue = $index * -510 + "px";
            $(".sub2-left .sub2-left-top .bookcover-preview .preview-box").css("transform", "translateX(" + translateXValue + ")");
        } else if ($index == max - 1) {
            $(".sub2-left .sub2-left-top .bookcover-preview").addClassClass("hidden");
            $(".sub2-left .sub2-left-top").css("overflow", "visible");
            $("#bookFlip").removeClassClass("hidden");
        }
    });
});