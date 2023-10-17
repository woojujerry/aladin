//gd1
$(function(){
    $.ajax({
        url: "./json/con6_gd1.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".con6-gd1 > div.eq(i)")
                    .eq(i)
                    .append("<a href='./sub.html'><img src='img/9.con_6/>" + data[i].url + "' alt='>" + data[i].alt + "'><div class='con6-gd1-txt'><p>" + data[i].txt + "</p></div></a>");            
                }
            }
        }
    });
});