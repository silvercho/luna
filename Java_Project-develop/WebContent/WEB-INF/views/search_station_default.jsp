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

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

<style>
header {
	height: 56px;
}

main {
	height: 750px;
}

.map_wrap, .map_wrap * {
	margin: 0;
	padding: 0;
	font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
	font-size: 12px;
}

.map_wrap a, .map_wrap a:hover, .map_wrap a:active {
	color: #000;
	text-decoration: none;
}

.map_wrap {
	position: relative;
	width: 100%;
	height: 100%;
}

#menu_wrap {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 250px;
	margin: 10px 0 30px 10px;
	padding: 5px;
	overflow-y: auto;
	background: rgba(255, 255, 255, 0.7);
	z-index: 1;
	font-size: 12px;
	border-radius: 10px;
}

.bg_white {
	background: #fff;
}

/* overlay */
.overlay_info a {
	display: block;
	background: #ffff00; no-repeat right 14px center;
	text-decoration: none;
	color: #000000;
	padding: 12px 36px 12px 14px;
	font-size: 14px;
	border-radius: 0px 0px 0 0
}

.overlay_info a strong {
	back ground: no-repeat;
	padding-left: 2px;
}

.overlay_info .desc {
	position: relative;
	min-width: 190px;
	height: 56px
}

.overlay_info .address {
	font-size: 12px;
	color: #333;
	position: relative;
	left: 5px;
	white-space: normal
}
</style>

<link rel="stylesheet" type="text/css" href="css/myPage_review.css">

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
					<h1 class="h3">충전소 검색</h1>
					<form class="input-group search_bar me-3" action="search_station"
						method="get" style="width: 400px">
						<input type="text" class="form-control" name="keyword"
							placeholder="원하는 충전소명 또는 지역을 입력해주세요."
							aria-label="Recipient's username"
							aria-describedby="button-addon2">
						<button class="btn btn-primary" type="submit" id="button-addon2">검색</button>
					</form>
				</div>

				<div id="map"
					style="width: 100%; height: 100%; position: relative; overflow: hidden;"></div>

			</main>
		</div>
	</div>

</body>

<script
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=02ff46e370d84683b5dd9de0a1f0ae5e&libraries=services"></script>
<script>
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = {
		center : new kakao.maps.LatLng(37.56731, 126.97889), // 지도의 중심좌표
		level : 4, // 지도의 확대 레벨
		mapTypeId : kakao.maps.MapTypeId.ROADMAP
	// 지도종류
	};

	// 지도를 생성한다 
	var map = new kakao.maps.Map(mapContainer, mapOption);

	// 지도 타입 변경 컨트롤을 생성한다
	var mapTypeControl = new kakao.maps.MapTypeControl();

	// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

	// 지도에 확대 축소 컨트롤을 생성한다
	var zoomControl = new kakao.maps.ZoomControl();

	// 지도의 우측에 확대 축소 컨트롤을 추가한다
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	/*// 마커 위에 표시할 인포윈도우를 생성한다
	var infowindow = new kakao.maps.InfoWindow({
		content : '<div style="padding:5px;">인포윈도우 :D</div>' // 인포윈도우에 표시할 내용
	});*/

</script>
</html>