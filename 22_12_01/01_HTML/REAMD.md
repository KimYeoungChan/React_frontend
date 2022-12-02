# 12월 1일

## HTML 기본_01
 
```html
<!DOCTYPE html>
 <!-- <html> 코드가 작성되는 부분 </html> -->
<html>
    <!-- <head> 제목이나 외부 입력을 작성하는 부분 </head> -->
    <head>
        <!-- <title> 페이지 탭 제목 부분 </title> <body>태그 이전에 작성 -->
            <title> Html Test 입니다</title>
    </head>
    <!-- <body> 페이지의 내용이 작성되는 부분 </body> -->
    <body>
        <h1>헬로우 안녕하세요!!</h1>
    </body>
</html>
```

## HTML 기본_02  
```html
<!-- 주석은 ctrl + / 하시면 됩니다 -->
<!DOCTYPE html>
<!-- <!DOCTYPE html> => html 5 문서를 의미 -->
<html lang="en">
    <!-- <html> tag는 html 전체를 감싸는 태그 -->
<head>
    <!-- <head> html문서의 속성을 지정하기 위한 태그,
        현재 페이지에 대한 정보 및 필요한 파일을 연결하는 작업을 함. -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 화면의 비율을 장치 비율에 맞춰서 보여지게 하는 역할 -->
    <title>부제</title>
</head>
<body>
    <!-- body 본문에 해당하는 내용 보이는 부분 -->
    <!-- h태그는 제목을 표현할 때 사용 -->
    <!-- h태그 h1~h6까지 있음. 크기와 두께가 지정되어 있음. 브라우저 별로 다를 수 있음. -->
    <h1>제목1</h1>
    <h2>제목2</h2>
    <h3>제목3</h3>
    <h4>제목4</h4>
    <h5>제목5</h5>
    <h6>제목6</h6>
    <!-- html에서 엔터는 줄바꿈이 아니라 공백을 의미 -->
    <!-- <br /> 줄바꿈 태그를 이용 -->
    안녕하세요.<br />
    안녕하세요.
    <!-- p태그는 새문단을 작성하는 태그, 위/아래 기본 여백을 가지고 있음. -->
    <p>
        안녕하세요<br />
        반갑습니다
    </p>
    <p>안녕하세요</p>
    <!-- b, strong 태그는 글자를 굵게 만드는 태그 -->
    <p>
        <b>안녕하세요</b> 안녕하세요 <br />
        <strong>안녕</strong>하세요
    </p>
</body>
</html>
```

## HTML 기본_03  
```html
<!-- 주석은 ctrl + / 하시면 됩니다 -->
<!DOCTYPE html>
<!-- <!DOCTYPE html> => html 5 문서를 의미 -->
<html lang="en">
    <!-- <html> tag는 html 전체를 감싸는 태그 -->
<head>
    <!-- <head> html문서의 속성을 지정하기 위한 태그,
        현재 페이지에 대한 정보 및 필요한 파일을 연결하는 작업을 함. -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 화면의 비율을 장치 비율에 맞춰서 보여지게 하는 역할 -->
    <title>부제</title>
</head>
<body>
    <!-- body 본문에 해당하는 내용 보이는 부분 -->
    <!-- h태그는 제목을 표현할 때 사용 -->
    <!-- h태그 h1~h6까지 있음. 크기와 두께가 지정되어 있음. 브라우저 별로 다를 수 있음. -->
    <h1>제목1</h1>
    <h2>제목2</h2>
    <h3>제목3</h3>
    <h4>제목4</h4>
    <h5>제목5</h5>
    <h6>제목6</h6>
    <!-- html에서 엔터는 줄바꿈이 아니라 공백을 의미 -->
    <!-- <br /> 줄바꿈 태그를 이용 -->
    안녕하세요.<br />
    안녕하세요.
    <!-- p태그는 새문단을 작성하는 태그, 위/아래 기본 여백을 가지고 있음. -->
    <p>
        안녕하세요<br />
        반갑습니다
    </p>
    <p>안녕하세요</p>
    <!-- b, strong 태그는 글자를 굵게 만드는 태그 -->
    <p>
        <b>안녕하세요</b> 안녕하세요 <br />
        <strong>안녕</strong>하세요
    </p>
    <p>
        <!-- i, em 는 글자를 기울이는 태그 -->
        <!-- i태그는 주로 아이콘을 이용할 떄 사용 -->
        <i>hello</i>
        <em>hi</em>
    </p>
    <p>
        <!-- ins:밑줄, del:취소선 -->
        <ins>hello</ins>
        <del>hello</del>
    </p>
    <p>
        <!-- sup:위첨자, sub:아래첨자 -->
        e<sup>2</sup>
        log<sub>10</sub>
    </p>
    <!-- hr: 수평선 만들 때 사용 -->
    <hr>
</body>
</html>
```