//구입 목록
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "패스토럴리아"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(0)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/1.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "악몽을 파는 가게 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(1)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/2.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "포스트맨은 벨을 두 번 울린다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(2)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/3.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "닥터 슬립 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(3)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/4.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "화씨 451"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(4)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/5.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "일곱 건의 살인에 대한 간략한 역사 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tBuybt-bk-wrap > div")
        .eq(5)
        .append("<a href='#'><img src='img/16.sub/9.sub19/01/6.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    //클릭 목록
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "서사의 위기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tClick-bk-wrap > div")
        .eq(0)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/1.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
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
        $(".sub19-tClick-bk-wrap > div")
        .eq(1)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/2.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "퓨처 셀프"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tClick-bk-wrap > div")
        .eq(2)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/3.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "패스토럴리아"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tClick-bk-wrap > div")
        .eq(3)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/4.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "귀여운 거 그려서 20년 살아남았습니다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tClick-bk-wrap > div")
        .eq(4)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/5.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "고 온 GO ON 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".sub19-tClick-bk-wrap > div")
        .eq(5)
        .append("<a href='#'><img src='img/16.sub/9.sub19/02/6.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    });
});
