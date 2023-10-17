$(document).ready(function(){
    $(".buy-btn4").mouseover(function(){
        $(this).siblings(".buy-btn4-sub").stop().show();
        $(this).siblings(".buy-btn4-sub").mouseleave(function(){
            $(this).stop().hide();
        });
    });
});