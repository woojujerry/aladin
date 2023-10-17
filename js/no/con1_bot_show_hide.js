$(document).ready(function(){
    $(".con1-lf-bot > div").not(":first").hide();

    $(".con1-bot1").show();
    $(".con1-bot2").hide();
    $(".con1-bot3").hide();
    $(".con1-bot4").hide();
    
    $(".con1-tab1").mouseover(function(){
        $(this).css("background-color", "#ffffff")
        $(".con1-bot1").show();
        $(".con1-bot2").hide();
        $(".con1-tab2").css("background-color", "#EDEFF1");
        $(".con1-bot3").hide();
        $(".con1-tab3").css("background-color", "#EDEFF1");
        $(".con1-bot4").hide();
        $(".con1-tab4").css("background-color", "#EDEFF1");
    });

    $(".con1-tab2").mouseover(function(){
        $(this).css("background-color", "#ffffff")
        $(".con1-bot2").show();
        $(".con1-bot1").hide();
        $(".con1-tab1").css("background-color", "#EDEFF1");
        $(".con1-bot3").hide();
        $(".con1-tab3").css("background-color", "#EDEFF1");
        $(".con1-bot4").hide();
        $(".con1-tab4").css("background-color", "#EDEFF1");
    });

    $(".con1-tab3").mouseover(function(){
        $(this).css("background-color", "#ffffff");
        $(".con1-bot3").show();
        $(".con1-bot1").hide();
        $(".con1-tab1").css("background-color", "#EDEFF1");
        $(".con1-bot2").hide();
        $(".con1-tab2").css("background-color", "#EDEFF1");
        $(".con1-bot4").hide();
        $(".con1-tab4").css("background-color", "#EDEFF1");
    }); 

    (".con1-tab4").mouseover(function(){
        $(this).css("background-color", "#ffffff");
        $(".con1-bot4").show();
        $(".con1-tab1").css("background-color", "#EDEFF1");
        $(".con1-bot2").hide();
        $(".con1-tab2").css("background-color", "#EDEFF1");
        $(".con1-bot3").hide();
        $(".con1-tab3").css("background-color", "#EDEFF1");
    });
});