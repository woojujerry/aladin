//bot2-1
$(function(){
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
        $(".con1-bot2-1 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div2/1.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>정신질환자 가족의 기록</p>");
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
        $(".con1-bot2-1 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div2/2.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>애주가 정지아의 첫 에세이</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "나는 지금도 거기 있어"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-1 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div2/3.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>네 명의 입장, 하나의 이야기</p>");
    });

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
        $(".con1-bot2-1 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div2/4.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>'스토리'에 빼앗긴 '서사'</p>");
    });
});

//bot2-2
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "루나의 전세역전"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-2 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div2/5.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>전세 사기 극복 에세이</p>");
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
        $(".con1-bot2-2 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div2/6.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>통증은 불필요한가?</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "베테랑의 몸"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-2 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div2/7.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>몸에 붙은 일과 삶</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "최민준의 아들코칭 백과"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-2 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div2/8.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>아들을 바꾸는 행동육아</p>");
    });
});

//bot2-3
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "개의 설계사"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-3 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div2/9.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>문윤성 SF문학상 장편 대상작</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "집착의 법칙"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-3 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div2/10.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>집착이라는 재능</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "철학이 내 손을 잡을 때"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-3 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div2/11.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>오늘을 춤추게 하는 철학</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "눈부시게 불완전한"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-3 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div2/12.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>극복과 치유 너머 장애 정치</p>");
    });
});

//bot2-4
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "탱크"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-4 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div2/13.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>탱크라는 텅 빈 믿음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "의료 비즈니스의 시대 : 우리는 어쩌다 아픈 몸을 시장에 맡기게 되었나"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-4 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div2/14.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.substring(0,21) + "...</a></p>")
        .append("<p class='contents'>비즈니스가 된 한국 의료 체계</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "일이란 무엇인가"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-4 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div2/15.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>일의 본질을 찾아서</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "건널목의 유령"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot2-4 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div2/16.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>다카노 가즈아키의 심령 스릴러</p>");
    });
});