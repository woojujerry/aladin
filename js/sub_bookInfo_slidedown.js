$(function(){
    $(document).scroll(function(){
        var bookScrollValue = $(window).scrollTop()
        if(bookScrollValue > 1200) {
            $("#sub-0-bookFix").show().css({"transform": "translate(0,0)", "transition": "0.5s"});
        } else {
            $("#sub-0-bookFix").css("transform", "translate(0, -150px)");
        }
    });
});