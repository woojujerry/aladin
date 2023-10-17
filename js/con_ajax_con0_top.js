$(document).ready(function(){
    /***book slide1 - 편집장의 선택***/
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


    /***book slide2 - 추천 이벤트***/
    $(".book-sd2 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd2/1.jpg'>");

    $(".book-sd2  > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd2/2.jpg'>");

    $(".book-sd2  > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd2/3.jpg'>");


    /***book slide3 - 이 주의 책***/
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
        $(".book-sd3 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd3/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>고요하게 휘몰아치는 최은영의 세계</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "브레인포그"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd3 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd3/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title.substring(0,15) + "</p>")
        .append('<p class="contents">"일상을 위협하는 머릿속 안개의 정체"</p>')
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
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
        $(".book-sd3 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd3/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>40만부 판매 <페인트> 이희영 신작</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "편집 만세"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd3 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd3/4.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>100%의 세계를 만드는 일</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });


    /***book slide4 - 신간 소개***/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "트렌드 코리아 2024"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd4 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd4/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>비상하는 청룡의 기운에 올라타라</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 외 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "시대예보: 핵개인의 시대"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd4 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd4/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append('<p class="contents">"세상 모든 각자가 맞이할 미래"</p>')
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "아주 짧은 소련사"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd4 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd4/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>러시아혁명부터 페레스트로이카까지</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "장난이 아니야"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd4 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd4/4.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>디지털 폭력에 맞서는 다섯 편의 이야기</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 외 지음, 구정인 만화</p>");
    });


    /***book slide5 - 베스트 예감***/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "어머니의 기원"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd5 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd5/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>시리 허스트베드 에세이</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음, " + data.documents[0].translators + " 옮김</p>");
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
        $(".book-sd5 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd5/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>전미도서상 후보, 정보라 리뷰대회</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "바깥 일기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd5 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd5/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>아니 에르노의 사회 탐구 기록</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
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
        $(".book-sd5 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd5/4.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append('<p class="contents">"저희도 탐사선을 보내야 합니다."</p>')
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음</p>");
    });


    /***book slide6 - 화제의 책***/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "일론 머스크"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd6 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd6/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>우리가 몰랐던 일론 머스크의 모든 것</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "권력을 경영하는 7가지 원칙"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd6 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd6/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>내 동료가 읽지 말아야 할 책!</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "자두네 도시락"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd6 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd6/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>13만 유튜버 'TOKYO자두네' 첫 책</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "왜 욱하세요?"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd6 > div")
        .eq(3)
        .append("<img src='img/3.con_top/booksd6/4.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>흥분해서 관계를 망치는 당신을 위해</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음</p>");
    });


    /***book slide7 - 이벤트 굿즈***/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "자연에 이름 붙이기"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd7 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd7/1.jpg'>")
        .append("<div class='gift'><img src='img/3.con_top/booksd7/more1.jpg'></div>")
        .append("<div class='more'><img src='img/3.con_top/booksd7/gift_pluse.svg'></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>룰루 밀러 추천 + 고블렛잔</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "다시 살아주세요"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd7 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd7/2.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>신미나 작가 친필 사인본</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "한국이 싫어서"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd7 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd7/3.jpg'>")
        .append("<div class='gift'><img src='img/3.con_top/booksd7/more2.jpg'></div>")
        .append("<div class='more'><img src='img/3.con_top/booksd7/gift_pluse.svg'></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>오늘의 젊은 작가 독서 기록 티켓</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "다시, 밖으로"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd7 > div")
        .eq(3)
        .append("<div class='cover'><img src='img/3.con_top/booksd7/4.jpg'></div>")
        .append("<div class='gift'><img src='img/3.con_top/booksd7/more3.jpg'></div>")
        .append("<div class='more'><img src='img/3.con_top/booksd7/gift_pluse.svg'></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>무광 손거울</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음</p>");
    });


    /***book slide8 - 눈에 띄는 새책***/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "트롤과 염소 삼 형제"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd8 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd8/1.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>맥 바넷 X 존 클라센 그림책</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음, 존 클라센 그림</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "개와 늑대"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd8 > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd8/2.jpg'>")
        .append("<div class='gift'><img src='img/3.con_top/booksd8/more1.jpg'></div>")
        .append("<div class='more'><img src='img/3.con_top/booksd8/gift_pluse.svg'></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>프랑스문학 전문 레모 브랜드전 + 노트</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음, " + data.documents[0].translators + " 옮김</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "양자 물리학"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd8 > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd8/3.jpg'>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>공 하나로 시작하는 신나는 과학 탐험</p>")
        .append("<p class='author'>" + data.documents[0].authors + " 지음</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "기적의 초등 어휘 일력 365"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".book-sd8 > div")
        .eq(3)
        .append("<div class='cover'><img src='img/3.con_top/booksd8/4.jpg'></div>")
        .append("<p class='booktitle'>" + data.documents[0].title + "</p>")
        .append("<p class='contents'>하유정 쌤의 기초 문해력 수업</p>")
        .append("<p class='author'>" + data.documents[0].authors[0] + " 지음</p>");
    });


    /***book slide9 - ebook***/
    $(".book-sd9 > div")
        .eq(0)
        .append("<img src='img/3.con_top/booksd9/1.jpg'>");

    $(".book-sd9  > div")
        .eq(1)
        .append("<img src='img/3.con_top/booksd9/2.jpg'>");

    $(".book-sd9  > div")
        .eq(2)
        .append("<img src='img/3.con_top/booksd9/3.jpg'>");
});