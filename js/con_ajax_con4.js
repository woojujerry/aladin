//bk1
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "아주 희미한 빛으로도"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk1 > div")
        .eq(0)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/1.jpg'></a><div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");

        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "또 못 버린 물건들"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk1 > div")
        .eq(1)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/2.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "고통에 관하여"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk1 > div")
        .eq(2)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/3.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "딸이 조용히 무너져 있었다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk1 > div")
        .eq(3)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/4.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "달의 아이"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk1 > div")
        .eq(4)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/5.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });
});

//bk2
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "불특정 다수"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk2 > div")
        .eq(0)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/6.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "시사의 위기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk2 > div")
        .eq(1)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/7.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "세계 끝의 버섯"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk2 > div")
        .eq(2)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/8.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "여름의 귤을 좋아하세요"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk2 > div")
        .eq(3)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/9.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "모든 멋진 일에는 두려움이 따른다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk2 > div")
        .eq(4)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/10.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });
});

//bk3
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "푸바오, 매일매일 행복해"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk3 > div")
        .eq(0)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/11.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "당신이 아픈 건 발 때문이다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk3 > div")
        .eq(1)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/12.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "빛 속에서 이룰 수 없는 일은 얼마나 많았던가"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk3 > div")
        .eq(2)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/13.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "소녀 동지여 적을 쏴라"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk3 > div")
        .eq(3)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/14.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "브레인 포그"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk3 > div")
        .eq(4)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/15.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });
});

//bk4
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "네가 있는 요일"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk4 > div")
        .eq(0)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/16.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "나의 이상하고 평범한 부동산 가족"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk4 > div")
        .eq(1)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/17.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "마시지 않을 수 없는 밤이니까요"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk4 > div")
        .eq(2)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/18.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "노화의 정복"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk4 > div")
        .eq(3)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/19.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "내 사랑을 시작한다"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con4-bk4 > div")
        .eq(4)
        .append("<div class='imgA'><a href='./sub.html'><img src='img/7.con_4/bk/20.jpg'></a></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>");
    
        $(".imgA")
        .append("<ul class='con4-bk-menu'></ul>");
        $(".con4-bk-menu")
        .append("<li><a herf='#'>장바구니에 담기</a></li>")
        .append("<li><a herf='#'>구매했어요</a></li>")
        .append("<li><a herf='#'>관심없어요</a></li>");
    });
});