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

<jsp:include page="../layout/header.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);

main {
	min-height: 850px;
	background: url("images/main.jpg") no-repeat center center;
}

.search_bar {
	width: 550px;
}

h1 {
	color: lightyellow;
	text-align: center;
	margin-top: 200px;
	font-size: 150px;
	font-family: 'Nanum Pen Script';
}
</style>
</head>
<body class="d-flex flex-column min-vh-100">

	<main>
		<div class="container-fluid">
			<h1>PICCA</h1>
			<form class="input-group p-2 mb-3 search_bar mx-auto mt-5" action="search_station" method="get">
				<input type="text" class="form-control" name="keyword"
					placeholder="원하는 충전소명 또는 지역을 입력해주세요."
					aria-label="Recipient's username" aria-describedby="button-addon2">
				<button class="btn btn-primary" type="submit" id="button-addon2">검색</button>
			</form>
		</div>
	</main>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>