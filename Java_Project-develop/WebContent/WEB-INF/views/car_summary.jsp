<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url var='root' value='/' />
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

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

<link rel="stylesheet" type="text/css" href="css/myPage_review.css">

<style>
.container {
	width: 2000px;
	margin: 0 auto;
}

ul.tabs {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

.tab-link {
	width: 50px;
	text-align: center;
}

.tab-link.current {
	width: 50px;
	text-align: center;
}

ul.tabs li {
	background: none;
	color: #222;
	display: inline-block;
	padding: 10px 15px;
	cursor: pointer;
}

ul.tabs li.current {
	background: #ededed;
	color: #222;
}

.tab-content {
	display: none;
	/* background: #ededed; */
	padding: 15px;
}

.tab-content.current {
	display: inherit;
}

dl {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
</style>

<script>
	$(document).ready(function() {

		$('ul.tabs li').click(function() {
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#" + tab_id).addClass('current');
		})

	})
</script>
<%-- <jsp:include page="../layout/header_ver3.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include> --%>

<jsp:include page="../layout/header.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include>

</head>
<body>

	<div class="container-fluid">
		<div class="row">
			<nav id="sidebarMenu"
				class="col-md-3 col-lg-2 d-md-block sidebar collapse">
				<h4
					class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>전기차 게시판</span>
				</h4>
				<div class="position-sticky pt-3">
					<ul class="nav flex-column tab">
						<li data-tab="car_summary" class="nav-item tabmenu" id="default">
							<a class="nav-link" aria-current="page" href="car_summary"><i
								class="bi bi-card-text fs-5"></i> 전기차 소개 </a>
						</li>
						<li data-tab="search_station" class="nav-item tabmenu"><a
							class="nav-link" aria-current="page" href="search_station_default"><i
								class="bi bi-card-text fs-5"></i> 전국 충전소 검색하기 </a></li>

						<li data-tab="community_notice" class="nav-item tabmenu""><a
							class="nav-link" aria-current="page" href="community_notice"><i
								class="bi bi-person fs-5"></i> 공지사항 </a></li>
						<li data-tab="community_review" class="nav-item tabmenu""><a
							class="nav-link" aria-current="page" href="community_review"><i
								class="bi bi-chat-text fs-5"></i> 이용후기 </a></li>
						<li data-tab="community_talkboard" class="nav-item tabmenu"">
							<a class="nav-link" aria-current="page" href="community_talkboard"><i
								class="bi bi-card-text fs-5"></i> 자유게시판 </a>
						</li>
					</ul>
				</div>
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<div
					class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 class="h3">전기차 개요</h1>
				</div>

				<div class="container">

					<ul class="tabs">
						<li class="tab-link current" data-tab="tab-1" style="width: 20%;">전기차</li>
						<li class="tab-link" data-tab="tab-2" style="width: 20%;">수소전기차</li>
						<li class="tab-link" data-tab="tab-3" style="width: 20%;">하이브리드차</li>
						<li class="tab-link" data-tab="tab-4" style="width: 30%;">플러그인하이브리드차</li>
					</ul>

					<div id="tab-1" class="tab-content current">
						<h3>전기차의 작동원리</h3>
						<d1 class="d102_blit">
						<dt>전기차는 고전압 배터리에서 전기에너지를 전기모터로 공급하여 구동력을 발생시키는 차량으로, 화석연료를
							전혀 사용하지 않는 무공해 차량입니다.</dt>
						</d1>
						<div class="structure_cont">
							<div class="left" style="width: 460px;">
								<img src="../images/car_01.jpg" alt="전기차의 외/내부 구조 이미지">
							</div>
						</div>
					</div>
					<div id="tab-2" class="tab-content">tab content2</div>
					<div id="tab-3" class="tab-content">tab content3</div>
					<div id="tab-4" class="tab-content">tab content4</div>

				</div>

			</main>
		</div>
	</div>

	<!-- <div class="position-sticky pt-3">
		<ul class="nav flex-column tab" style="display:block;">
			<li data-tab="car_car" class="nav-item tabmenu" id="default" style="display:inline-block; width: 20%;"><a
				class="nav-link active" aria-current="page" href="car_car"> 전기차 </a></li>
			<li data-tab="car_h2car" class="nav-item tabmenu" style="display:inline-block; width: 20%;"><a
				class="nav-link" aria-current="page" href="#"> 수소차 </a></li>
			<li data-tab="car_hybirdcar" class="nav-item tabmenu" style="display:inline-block; width: 20%;"><a
				class="nav-link" aria-current="page" href="#"> 하이브리드차 </a></li>
			<li data-tab="car_pluginhybridcar" class="nav-item tabmenu" style="display:inline-block; width: 20%;"><a
				class="nav-link" aria-current="page" href="#"> 플러그인하이브리드차 </a></li>
		</ul>
	</div> -->



	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>