<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:url var='root' value='/'/>
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

<link rel="stylesheet" type="text/css" href="../css/myPage_review.css">

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
	$(function() {
		// tab operation
		$('.tabmenu').click(function() {
			var activeTab = $(this).attr('data-tab');
			
			$.ajax({
				type : 'GET', //get방식으로 통신
				url : activeTab + ".jsp", //탭의 data-tab속성의 값으로 된 html파일로 통신
				dataType : "html", //html형식으로 값 읽기
				error : function() { //통신 실패시
					alert('통신실패!');
				},
				success : function(data) { //통신 성공시 탭 내용담는 div를 읽어들인 값으로 채운다.
					$('#tabcontent').html(data);
				}
			});
		});
		$('#default').click();
	});
</script>

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
						<a class="nav-link active"aria-current="page" href="#"><i class="bi bi-card-text fs-5"></i>
								전기차 소개 </a></li>
						<li data-tab="search_station" class="nav-item tabmenu">
						<a class="nav-link" aria-current="page"	href="#"><i class="bi bi-card-text fs-5"></i> 
								전국 충전소 검색하기 </a></li>
						
						<li data-tab="community_notice" class="nav-item tabmenu"">
						<a class="nav-link" aria-current="page"	href="#"><i class="bi bi-person fs-5"></i> 
								공지사항 </a></li>
						<li data-tab="community_review" class="nav-item tabmenu"">
						<a class="nav-link" aria-current="page"	href="#"><i class="bi bi-chat-text fs-5"></i> 
								이용후기 </a></li>
						<li data-tab="community_talkboard" class="nav-item tabmenu"">
						<a class="nav-link" aria-current="page"	href="#"><i class="bi bi-card-text fs-5"></i> 
								자유게시판 </a></li>		
					</ul>
				</div>
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
			
			</main>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>