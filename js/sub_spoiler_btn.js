//sub16 : 스포일러 포함 버튼
function imgSpoilerShow(){
    $(".sub16-rt-coInfo-spoiler > a:nth-of-type(1)").hide();
    $(".sub16-rt-coInfo-spoiler > a:nth-of-type(2)").show();
}

function imgSpoilerHide(){
    $(".sub16-rt-coInfo-spoiler > a:nth-of-type(1)").show();
    $(".sub16-rt-coInfo-spoiler > a:nth-of-type(2)").hide();
}