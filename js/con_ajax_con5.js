//bk1
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "나만 그런 게 아니었어"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk1 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/8.con_5/1.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'>요시타케 신스케의 유쾌하고 엉뚱한 생각 모음집</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "털실타래 Vol.5 (2023년 가을호)"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk1 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/8.con_5/2.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'>한국판 출간 1주년 기념판. 가을에 입기 좋은 영국의 '건지 니트'</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "경제학이 필요한 순간"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk1 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/8.con_5/3.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p></div>")
        .append("<p class='sub'>경제학은 어떻게 사람을 살리는가</p>");
    });
})

//bk2
$(function(){
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
        $(".con5-bk2 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/8.con_5/4.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'>40만 베스트셀러 <페인트> 이희영 작가 신작소설</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "천개산 패밀리 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk2 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/8.con_5/5.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'>박현숙 작가의 마법 같은 시리즈의 시작, 떠돌이 개들의 이야기</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "급진적으로 존재하기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk2 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/8.con_5/6.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p></div>")
        .append("<p class='sub'>장애, 상호교차성, 삶과 정의에 관한 최전선의 이야기들</p>");
    });
})

//bk3
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "공정감각"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk3 > div")
        .eq(0)
        .append("<a href='./sub.html'><img src='img/8.con_5/7.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'>'에타'에서 썰리고 퇴출당하며 벼려낸 청년들의 시대 감각</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "들꽃 식혜"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk3 > div")
        .eq(1)
        .append("<a href='./sub.html'><img src='img/8.con_5/8.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p>")
        .append("<p class='sub'><낙엽 스낵> 백유연 작가 신작 그림책</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "그림 동화 1"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con5-bk3 > div")
        .eq(2)
        .append("<a href='./sub.html'><img src='img/8.con_5/9.jpg'></a>")
        .append("<p class='tit'>" + data.documents[0].title + "</p></div>")
        .append("<p class='sub'>오토 우벨로데 삽화 400여점, 그림 형제의 편지, 서문 수록 완역본</p>");
    });
})