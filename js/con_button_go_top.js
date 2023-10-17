$(document).ready(function(){
    $(".go-top").click(btnGoTopClick);
    function btnGoTopClick(e){
        $("body, html").animate({scrollTop : 0}, 500);
    }
});