//bot1-1
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
        $(".con1-bot1-1 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd1/1.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'><구의 증명> 최진영 소설의 분기점</p>");
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
        $(".con1-bot1-1 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd1/2.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>중요한 것은 유전자가 아니다. 후성유전학의 놀...</p>");
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
        $(".con1-bot1-1 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd1/3.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>제1회 위즈덤하우스 판타지문학상 청소년 부문 ...</p>");
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
        $(".con1-bot1-1 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd1/4.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>김달님만이 들려줄 수 있는 특별한 삶의 이야기</p>");
    });
});

//bot1-2
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "상황과 이야기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-2 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div1/5.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>비비언 고닉이 말하는 자전적 글쓰기</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "말리의 일곱 개의 달"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-2 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div1/6.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>2022 부커상 심사위원 만장일치 수상작</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "어린이 마음 약국"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-2 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div1/7.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>어린이 마음 약국에 온 걸 환영합니다.</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "드라큘라의 시"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-2 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div1/8.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>외로움과 두려움을 노래하는 드라큘라</p>");
    });
});

//bot1-3
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "촉진하는 밤"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-3 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div1/9.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>범람하는 밤에게 굴하지 않기</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "6시 20분의 남자"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-3 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div1/10.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>데이비드 발다치 신작, 뉴욕타임스 베스트셀러 1위</p>");
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
        $(".con1-bot1-3 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div1/11.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>술과 사람, 인생. 정지아의 내밀한 이야기들</p>");
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
        $(".con1-bot1-3 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div1/12.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>정신질환자의 가족으로 사는 일</p>");
    });
});

//bot1-4
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "한석준의 말하기 수업"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-4 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div1/13.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>말하기에 자신이 생기면 인생이 바뀐다.</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "감염 동물"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot1-4 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div1/14.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>제1회 위즈덤하우스 판타지문학상 어린이부문 ...</p>");
    });

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
        $(".con1-bot1-4 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div1/15.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>전세 사기 피해자 루나의 피땀눈물의 기록</p>");
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
        $(".con1-bot1-4 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div1/16.jpg'>")
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>일하는 몸의 자부심</p>");
    });
});