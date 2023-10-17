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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.substring(0.21) + "...</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.substring(0.21) + "...</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].titlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'><위로를 주는 빵집, 오렌지 베이커리> 원서</p>");
    });
});

$(function(){
        $(".con1-bot3-1 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/4.jpg'>")
        .append("<p class='booktitle'><a href='#'>Breadsong : How Baking Changed...</a></p>")
        .append("<p class='contents'><위로를 주는 빵집, 오렌지 베이커리> 원서</p>");
})


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
        .append("<p class='booktitle'><a href='#'>" + data.documents[1].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].titletitlesubstring(0.21) + "...</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'>풀컬러 얼리 챕터북 <더 프린세스 인 블랙 #7></p>");
    });
});

$(function(){
    $(".con1-bot3-2 > div")
        .eq(1)
        .append("<img src='img/4.con_1/div3/6.jpg'>")
        .append("<p class='booktitle'><a href='#'>Look Out for the Little Guy...</a></p>")
        .append("<p class='contents'>앤트맨 스콧랭 영화 회고록</p>");

    $(".con1-bot3-2 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div3/7.jpg'>")
        .append("<p class='booktitle'><a href='#'>なかよし 2023年 10月號</a></p>")
        .append("<p class='contents'>카드캡터 사쿠라 6면 메모 컬렉션</p>");
    
    $(".con1-bot3-2 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/8.jpg'>")
        .append("<p class='booktitle'><a href='#'>Princess in Black #7 : the Bathtime...</a></p>")
        .append("<p class='contents'>풀컬러 얼리 챕터북 <더 프린세스 인 블랙 #7></p>");
})

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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title + "</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
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
        .append("<p class='booktitle'><a href='#'>" + data.documents[0].title.titletitlesubstring(0.21) + "...</a></p>")
        .append("<p class='contents'></p>");
    });
});

$(function(){
    $(".con1-bot3-3 > div")
        .eq(0)
        .append("<img src='img/4.con_1/div3/9.jpg'>")
        .append("<p class='booktitle'><a href='#'>まんがタイムきららMAX 2023年 10月號</a></p>")
        .append("<p class='contents'>봇치 더 록! 오리지널 기타 피크 부록</p>");

    $(".con1-bot3-3 > div")
        .eq(2)
        .append("<img src='img/4.con_1/div3/11.jpg'>")
        .append("<p class='booktitle'><a href='#'>The Bad Guys #17 : The Bad Guys in L...</a></p>")
        .append("<p class='contents'>The Bad Guys #17 | 뉴욕타임즈 베스트셀링 시...</p>");

    $(".con1-bot3-3 > div")
        .eq(3)
        .append("<img src='img/4.con_1/div3/12.jpg'>")
        .append("<p class='booktitle'><a href='#'>Diary of a Wimpy Kid #2 : Rodrick...</a></p>")
        .append("<p class='contents'></p>");
})