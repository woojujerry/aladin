/***contents 1 left - 편집장의 선택***/
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>일하는 몸의 자부심</p>");
    });
});


/***contents 1 left - ebook***/
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.substring(0,21) + "...</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>다카노 가즈아키의 심령 스릴러</p>");
    });
});


/***contents 1 left - 외국도서***/
//bot3-1
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Harry Potter and the Prisoner of Azkaban : Minalima Edition"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-1 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div3/1.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.substring(0.21) + "...</a></p>")
        .append("<p class='contents'><해리포터와 아즈카반의 죄수> 미나리마 에디션</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Dune Part One: The Photography"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-1 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div3/2.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.substring(0.21) + "...</a></p>")
        .append("<p class='contents'>영화 <듄:파트원> 사진집</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "The Paper Dolls"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-1 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div3/3.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>The Paper Dolls | 느리게읽기 2023년 가을학기 ...</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Breadsong : How Baking Changed Our Lives"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){//data가 없어서 밑에 함수로 대체
        $(".con1-bot3-1 > div")
        .eq(3)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].titlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'><위로를 주는 빵집, 오렌지 베이커리> 원서</p>");
    });
});

$(function(){
        $(".con1-bot3-1 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/4.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>Breadsong : How Baking Changed...</a></p>")
        .append("<p class='contents'><위로를 주는 빵집, 오렌지 베이커리> 원서</p>");
});


//bot3-2
$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Elon Musk"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-2 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div3/5.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[1].title + "</a></p>")
        .append("<p class='contents'>월터 아이작슨 <일론 머스크> 전기</p>");
    });

    $.ajax({//data가 없어서 밑에 함수로 대체
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Look Out for the Little Guy"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-2 > div")
        .eq(1)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'>앤트맨 스콧랭 영화 회고록</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "なかよし 2023年 10月號"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-2 > div")
        .eq(2)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>카드캡터 사쿠라 6면 메모 컬렉션</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Princess in Black #7 : the Bathtime Battle"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-2 > div")
        .eq(3)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'>풀컬러 얼리 챕터북 <더 프린세스 인 블랙 #7></p>");
    });
});

$(function(){
    $(".con1-bot3-2 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div3/6.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>Look Out for the Little Guy...</a></p>")
        .append("<p class='contents'>앤트맨 스콧랭 영화 회고록</p>");

    $(".con1-bot3-2 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div3/7.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>なかよし 2023年 10月號</a></p>")
        .append("<p class='contents'>카드캡터 사쿠라 6면 메모 컬렉션</p>");
    
    $(".con1-bot3-2 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/8.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>Princess in Black #7 : the Bathtime...</a></p>")
        .append("<p class='contents'>풀컬러 얼리 챕터북 <더 프린세스 인 블랙 #7></p>");
});

//bot3-3
$(function(){//data가 없어서 밑에 함수로 대체
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "まんがタイムきらら MAX 2023年 10月號"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-3 > div")
        .eq(0)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>봇치 더 록! 오리지널 기타 피크 부록</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Thebes Land"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-3 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div3/10.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title + "</a></p>")
        .append("<p class='contents'>연극 <테베랜드> 대본</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "The Bad Guys #17 : The Bad Guys in Let the Games Begin!"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-3 > div")
        .eq(2)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'>The Bad Guys #17 | 뉴욕타임즈 베스트셀링 시...</p>");
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "Diary of a Wimpy Kid #2 : Rodrick Rules"
        },
        headers: {
            Authorization: "KakaoAK 3c81612df288ea56a477489b96e624ed"
        },
    }).done(function (data){
        $(".con1-bot3-3 > div")
        .eq(3)
        .append("<p class='booktitle'><a href='./sub.html'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'></p>");
    });
});

$(function(){
    $(".con1-bot3-3 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div3/9.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>まんがタイムきららMAX 2023年 10月號</a></p>")
        .append("<p class='contents'>봇치 더 록! 오리지널 기타 피크 부록</p>");

    $(".con1-bot3-3 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div3/11.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>The Bad Guys #17 : The Bad Guys in L...</a></p>")
        .append("<p class='contents'>The Bad Guys #17 | 뉴욕타임즈 베스트셀링 시...</p>");

    $(".con1-bot3-3 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/12.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>Diary of a Wimpy Kid #2 : Rodrick...</a></p>")
        .append("<p class='contents'></p>");
});


/***contents 1 left - 알라딘굿즈***/
$(function(){
    //con1-bot4-1
    $(".con1-bot4-1 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div4/1.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>패브릭 독서대</a></p>")
        .append("<p class='contents'>간편하고 가볍게 휴대</p>");

    $(".con1-bot4-1 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div4/2.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>전통 책갈피</a></p>")
        .append("<p class='contents'>책 속에 수놓은</p>");

    $(".con1-bot4-1 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div4/3.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>도라에몽 머그</a></p>")
        .append("<p class='contents'>따스함이 생각나는 계절</p>");

    //con1-bot4-2
    $(".con1-bot4-2 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div4/4.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>기능에 집중한 문진</a></p>")
        .append("<p class='contents'>손이 자유로운 독서</p>");

    $(".con1-bot4-2 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div4/5.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>3단 팬케이스</a></p>")
        .append("<p class='contents'>핸들이 있는 대용량</p>");

    $(".con1-bot4-2 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div4/6.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>발 볼 편한 쿠션 실내화</a></p>")
        .append("<p class='contents'>오래도록 신어보고 확인한</p>");

    //con1-bot4-3
    $(".con1-bot4-3 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div4/7.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>사각 투명 문진</a></p>")
        .append("<p class='contents'>액자같은</p>");

    $(".con1-bot4-3 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div4/8.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>스마트폰 숄더 스트랩</a></p>")
        .append("<p class='contents'>양손이 자유로운</p>");

    $(".con1-bot4-3 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div4/9.jpg'>")
        .append("<p class='booktitle'><a href='./sub.html'>[김이랑 x 알라딘] 미니 러그</a></p>")
        .append("<p class='contents'>나만의 공간에 작은 꽃밭</p>");
});
