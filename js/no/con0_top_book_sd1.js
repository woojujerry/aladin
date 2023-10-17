$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "단 한 사람"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd1 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd1/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'><구의 증명> 최진영 장편소설</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "경험은 어떻게 유전자에 새겨지는가"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd1 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd1/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title.substring(0,15) + "..</p>")
        .append('<p class="contents">"중요한 것은 유전자가 아니다"</p>')
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "비스킷"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd1 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd1/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>100% 독자의 선택, 위즈덤하우스 대상</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "우리는 조금씩 자란다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd1 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd1/4.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'><나의 두 사람> 김달님 신작 에세이</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });
});