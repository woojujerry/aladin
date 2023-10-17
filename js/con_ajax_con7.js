//sp1
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "책과 우연들"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp1 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/10.con_7/1.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 에디션)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "도어"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp1 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/10.con_7/2.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "훔쳐가는 노래"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp1 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/10.con_7/3.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "너의 췌장을 먹고 싶어"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp1 > div")
        .eq(3)
        .append("<a href='./sub.html'><img src='img/10.con_7/4.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "더 좋은 삶을 위한 철학"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp1 > div")
        .eq(4)
        .append("<a href='./sub.html'><img src='img/10.con_7/5.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });
});

//sp2
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "사유 식탁"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp2 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/10.con_7/6.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (어나더 커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "영화를 찍으며 생각한 것"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp2 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/10.con_7/7.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "왜 세계의 절반은 굶주리는가?"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp2 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/10.con_7/8.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "내 마음 ㅅㅅㅎ"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp2 > div")
        .eq(3)
        .append("<a href='./sub.html'><img src='img/10.con_7/9.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "농부 달력"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp2 > div")
        .eq(4)
        .append("<a href='./sub.html'><img src='img/10.con_7/10.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });
});

//sp3
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "안녕 주정뱅이"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp3 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/10.con_7/11.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "말하기를 말하기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp3 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/10.con_7/12.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "행복한 청소부"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp3 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/10.con_7/13.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (50만 부 기념 한정판 리커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "정의란 무엇인가"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp3 > div")
        .eq(3)
        .append("<a href='./sub.html'><img src='img/10.con_7/14.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 에디션)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "공정하다는 착각"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp3 > div")
        .eq(4)
        .append("<a href='./sub.html'><img src='img/10.con_7/15.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 에디션)</p>");
    });
});

//sp4
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "빈방의 빛 : 시인이 말하는 호퍼"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp4 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/10.con_7/16.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "갈매기에게 나는 법을 가르쳐준 고양이"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp4 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/10.con_7/17.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "슬픈 세상의 기쁜 말"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp4 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/10.con_7/18.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 에디션)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "담을 넘은 아이"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp4 > div")
        .eq(3)
        .append("<a href='./sub.html'><img src='img/10.con_7/19.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버 특별판)</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "일곱 개의 단어로 된 사전"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con7-sp4 > div")
        .eq(4)
        .append("<a href='./sub.html'><img src='img/10.con_7/20.jpg'></a>")
        .append("<p class='booktitle'>" + data.documents[0].title + " (리커버, 양장)</p>");
    });
});