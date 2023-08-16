<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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

<style type="text/css">
body, table {
	font-family: 'Nanum Gothic', sans-serif;
}

.sidebar .nav-link {
	font-weight: 500;
	color: #333;
}

.sidebar .nav-link.active {
	color: #2470dc;
}

a {
    text-decoration: none;
    color: #222;
}

a, button, input[type=submit], input[type=button], input[type=reset] {
    cursor: pointer;
}
</style>

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
					<h1 class="h3">충전소 정보</h1>

				</div>

				<table class="datatable"
					style="width: 100%; background: white; margin-top: 10px;">
					<tbody>
						<tr>
							<td colspan="2">
								<div style="float: left">
									<h1 style="font-size: 18px; font-weight: bold">${info.statNm }</h1>
								</div>
							</td>
						</tr>
						<tr>
							<td>주소</td>
							<td>
								<div>${info.addr }</div>

							</td>
						</tr>
						<tr>
							<td>위도</td>
							<td>${info.lat }</td>
						</tr>
						<tr>
							<td>경도</td>
							<td>${info.lng }</td>
						</tr>
						<tr>
							<td>이용시간</td>
							<td>${info.useTime }</td>
						</tr>
						<tr>
							<td>운영기관</td>
							<td>${info.bnm }</td>
						</tr>
						<tr>
							<td>주차료</td>
							<c:choose>
								<c:when test="${info.parkingfree == 'Y'}">
									<td>무료</td>
								</c:when>
								<c:otherwise>
									<td>유료</td>
								</c:otherwise>
							</c:choose>
						</tr>
					</tbody>
				</table>
				<hr>

				<table class="datatable2"
					style="width: 100%; background: white; margin-top: 10px">
					<tbody>
						<tr>
							<td style="text-align: center;"><b>충전기 수</b></td>
							<td style="text-align: center;"><b>충전기 상태</b></td>
							<td style="text-align: center;"><b>충전기 타입</b></td>
						</tr>
					<c:forEach var="info" items="${list }">
						<tr>
							<td style="text-align: center;">
							${info.count }
							</td>
							<td style="text-align: center;">
							<c:choose>
							<c:when test="${info.stat  == '1'}"><span style="color: #ff0088">통신이상</span></c:when>
							<c:when test="${info.stat  == '2'}"><span style="color: #009000">충전대기</span></c:when>
							<c:when test="${info.stat  == '3'}"><span style="color: #ff6600">충전중</span></c:when>
							<c:when test="${info.stat  == '4'}"><span style="color: #ff0088">운영중지</span></c:when>
							<c:when test="${info.stat  == '5'}"><span style="color: #ff0088">점검중</span></c:when>
							<c:otherwise><span style="color: #ff0088">상태미확인</span></c:otherwise>
							</c:choose>
							</td>
							<td style="text-align: center;">
							<c:choose>
							<c:when test="${info.chgerType  == '01'}">DC차데모</c:when>
							<c:when test="${info.chgerType  == '02'}">AC완속</c:when>
							<c:when test="${info.chgerType  == '03'}">DC차데모+AC3상</c:when>
							<c:when test="${info.chgerType  == '04'}">DC콤보</c:when>
							<c:when test="${info.chgerType  == '05'}">DC차데모+DC콤보</c:when>
							<c:when test="${info.chgerType  == '06'}">DC차데모+AC3상+DC콤보</c:when>
							<c:when test="${info.chgerType  == '07'}">AC3상</c:when>
							</c:choose>
							</td>
						</tr>
						</c:forEach>
					</tbody>
				</table>
				<hr>

				<table class="datatable2015"
					style="width: 100%; margin-top: 10px; font-size: 15px; background: white; border-bottom: 2px solid #336699">
					<tbody>
						<tr>
							<td><b>가본 사람들의 후기</b></td>
						</tr>
					</tbody>
				</table>

				<div id="commentlayout" style="background: white; font-size: 15px">
					<div
						style="padding-left: 20px; padding-right: 20px; padding-top: 15px; padding-bottom: 15px; line-height: 180%;">

						<span style="padding-left: 5px; font-size: 15px" id="comment40">여기
							경쟁 빡터져요</span>


						<div style="background: white; padding-left: 0px; padding-top: 5px; font-size: 13px; color: gray">
							hong <span style="padding-left: 20px">(2021-06-05 19:23:34)</span>
						</div>
					</div>
					<div
						style="padding-left: 20px; padding-right: 20px; padding-top: 15px; padding-bottom: 15px; line-height: 180%; border-top: 1px dashed #e5e5e5">

						<span style="padding-left: 5px; font-size: 15px" id="comment3">24시간
							이용 가능해서 좋네요.</span>


						<div style="background: white; padding-left: 0px; padding-top: 5px; font-size: 13px; color: gray">
							admin <span style="padding-left: 20px">(2020-10-13 05:16:19)</span>
						</div>
					</div>
				</div>

				<div style="background: white">
					<form action="/charge/detail.php?uid=10968" method="post"
						name="commentform" style="display: inline" onsubmit="return false">
						<input type="hidden" name="chargeuid" value="10968">

						<div
							style="width: calc(100% - 40px); padding-left: 20px; padding-right: 20px; padding-bottom: 20px; padding-top: 5px">

							<textarea id="chargecomment" name="chargecomment"
								style="width: calc(100% - 42px); height: 100px; line-height: 180%; border: 1px solid rgb(211, 211, 211); font-size: 15px; vertical-align: middle; padding: 12px 20px;"
								placeholder="비속어 / 욕설이 포함되거나 악의적 비방 / 명예훼손성 후기는 삭제될 수 있습니다. 
매너있는 후기 작성 부탁 드립니다. 
후기는 충전소당 하루에 1개만 작성 가능하니 신중하게 작성 부탁드립니다."
								onfocus="showcommentbox();"></textarea>
						</div>
						<div id="commentbox"
							style="display: block; padding-left: 20px; padding-right: 20px;">
							<div
								style="clear: both; width: 100%; display: inline-block; padding-bottom: 16px">

								<div style="float: right">
									<input type="button" class="button" onclick="commentsubmit();"
										value="입력"
										style="background: #ff6600; color: white; border: 0px; width: 100px; height: 30px; vertical-align: middle; font-size: 15px">
								</div>
							</div>
						</div>
					</form>
				</div>
			</main>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>