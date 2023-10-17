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
        .append("<p class='booktitle'>" + data.documents[0].title.substring(0,15) + "..</p>")
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
});