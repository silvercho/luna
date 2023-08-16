<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

<jsp:include page="../layout/header_ver2.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include>

<style type="text/css">
header {
	height: 160px;
}

main {
	min-height: 600px;
}

body {
	/* background-color: #f5f5f5; */
}

.form-signin {
	width: 100%;
	max-width: 330px;
	padding: 15px;
	margin: auto;
}

.form-signin .checkbox {
	font-weight: 400;
}

.form-signin .form-floating:focus-within {
	z-index: 2;
}

.form-signin input[type="email"] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>
</head>
<body class="text-center">

	<main class="form-signin">
		<form action="login.do" method="post">
			<img class="mb-4 mx-auto" src="images/logo2.PNG" alt="" width="92" height="112">
			<h1 class="h3 mb-3 fw-normal">로그인</h1>

			<div class="form-floating">
				<input type="text" name="id" class="form-control" id="floatingInput"
					placeholder="name@example.com"> <label for="floatingInput">아이디</label>
			</div>
			<div class="form-floating">
				<input type="password" name="pwd" class="form-control"
					id="floatingPassword" placeholder="Password"> <label
					for="floatingPassword">비밀번호</label>
			</div>

			<!-- <div class="checkbox mb-3">
				<label> <input type="checkbox" value="remember-me">
					Remember me
				</label>
			</div> -->
			<button class="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
		</form>
		<button class="w-100 btn btn-lg btn-secondary mt-3" type="button"
			onclick="location.href='join'">
			회원가입
		</button>
		<p class="mt-5 mb-3 text-muted">© 2022–2022</p>

	</main>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>