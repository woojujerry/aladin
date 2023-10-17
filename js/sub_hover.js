$(document).ready(function(){
    //별1
    $(".sub16-rt-star-1 > img").mouseover(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
    })
    .mouseleave(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
    });
    //별2
    $(".sub16-rt-star-2 > img").mouseover(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
    })
    .mouseleave(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
    });
    //별3
    $(".sub16-rt-star-3 > img").mouseover(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
    })
    .mouseleave(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
    });
    //별4
    $(".sub16-rt-star-4 > img").mouseover(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-3 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
    })
    .mouseleave(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-3 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
    });
    //별5
    $(".sub16-rt-star-5 > img").mouseover(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-3 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
        $(".sub16-rt-star-4 > img").attr("src", "img/16.sub/8.sub16/icon_star_on_24.png");
    })
    .mouseleave(function(){
        $(this).attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-1 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-2 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-3 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
        $(".sub16-rt-star-4 > img").attr("src", "img/16.sub/8.sub16/icon_star_off_24.png");
    });
});