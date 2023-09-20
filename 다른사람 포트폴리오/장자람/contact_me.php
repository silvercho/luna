<?php
header("Content-Type: text/html; charset=UTF-8");
 
// 빈 필드가 있는지 확인하는 구문
if(empty($_POST['name'])  		|| // post로 넘어온 name값이 비었는지 확인
   empty($_POST['email']) 		|| // email값이 비었는지 확인
   empty($_POST['phone']) 		|| // phone값이 비었는지 확인
   empty($_POST['message'])	|| // message값이 비었는지 확인
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) // 전달된 이메일 값이 유효한 이메일값인지 검증
   {
	echo '
	<head>
		<link rel="shortcut icon" href="./image/favicon.png"/>
		<title>Jang_Ja_Ram_94 | 메일전송</title>
		<style>
		@font-face{
			font-family:akk;
			src:url(./font/akk.ttf) format("truetype"),
				url(./font/akk.woff) format("woff"),
				url(./font/akk.eot) format("embedded-opentype");
		}
		*{margin:0;padding:0;border:0;}

		ul,li{list-style:none;}

		a{text-decoration:none;transition:all 0.6s; color:#000;}
		body{
			width:100%;
			max-width:100%;
			overflow-x:hidden;
			font-family:"akk";
		}


		</style>
	</head>
	<div id="cover" style="position:fixed;width:100%;height:100%;left:0%;top:0%;text-align:center;background:#008083"><p style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">잘못 입력하였습니다. <br/>작성하신 내용을 다시 확인하여 주시기 바랍니다.<br/><a href="./index.html" style="">돌아가기</a></p></div>';
	return false;
   }
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// 이메일을 생성하고 메일을 전송하는 부분
$to = 'wkdwkdus56@naver.com'; // 받는 측의 이메일 주소를 기입하는 부분
/*dialm2011@hanmail.net*/
$email_subject = "FROM:  $name"; // 메일 제목에 해당하는 부분
$email_body = "본 메일은 홈페이지 폼메일로부터 전송된 이메일입니다..\n\n"."세부정보는 다음과 같습니다.\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "Reply-To: $email_address\r\n"; // 답장 주소
 $header.= "MIME-Version: 1.0\r\n"; 
$header.= "Content-Type: text/html; charset=ISO-8859-1\r\n"; 
$header.= "X-Priority: 1\r\n"; 
$status = mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers);


if($status)
{ 
    echo '
	<head>
		<link rel="shortcut icon" href="./image/favicon.png"/>
		<title>Jang_Ja_Ram_94 | 메일전송</title>
		<style>
		@font-face{
			font-family:akk;
			src:url(./font/akk.ttf) format("truetype"),
				url(./font/akk.woff) format("woff"),
				url(./font/akk.eot) format("embedded-opentype");
		}
		*{margin:0;padding:0;border:0;}

		ul,li{list-style:none;}

		a{text-decoration:none;transition:all 0.6s; color:#000;}
		body{
			width:100%;
			max-width:100%;
			overflow-x:hidden;
			font-family:"akk";
		}


		</style>
	</head>
	<div id="cover" style="position:fixed;width:100%;height:100%;left:0%;top:0%;text-align:center;background:#008083"><p style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">작성하신 메일을 자람_94에게 전송하였습니다.<br/><a href="./index.html" style="">돌아가기</a></p></div>';
} else { 
    echo '
<head>
		<link rel="shortcut icon" href="./image/favicon.png"/>
		<title>Jang_Ja_Ram_94 | 메일전송</title>
		<style>
		@font-face{
			font-family:akk;
			src:url(./font/akk.ttf) format("truetype"),
				url(./font/akk.woff) format("woff"),
				url(./font/akk.eot) format("embedded-opentype");
		}
		*{margin:0;padding:0;border:0;}

		ul,li{list-style:none;}

		a{text-decoration:none;transition:all 0.6s; color:#000;}
		body{
			width:100%;
			max-width:100%;
			overflow-x:hidden;
			font-family:"akk";
		}


		</style>
	</head>
	<div id="cover" style="position:fixed;width:100%;height:100%;left:0%;top:0%;text-align:center;background:#008083"><p style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">전송에 실패하였습니다. 다시 시도 해주시기 바랍니다.</br><a href="./index.html" style="">돌아가기</a></p></div>';
}
return true;			
?>