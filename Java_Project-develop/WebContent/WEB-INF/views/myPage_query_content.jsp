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
					<span>MY PAGES</span>
				</h4>
				<div class="position-sticky pt-3">
					<ul class="nav flex-column tab">
						<li data-tab="myPage_querylist" class="nav-item tabmenu"
							id="default"><a class="nav-link" aria-current="page"
							href="myPage_querylist"><i class="bi bi-chat-text fs-5"></i>
								문의 내역 </a></li>
						<li data-tab="myPage_query" class="nav-item tabmenu"><a
							class="nav-link" aria-current="page" href="myPage_query"><i
								class="bi bi-chat-text fs-5"></i> 문의 하기 </a></li>
						<li data-tab="myPage_review" class="nav-item tabmenu"><a
							class="nav-link" aria-current="page" href="myPage_review"><i
								class="bi bi-card-text fs-5"></i> 내가 작성한 리뷰 </a></li>
						<li data-tab="myPage_info" class="nav-item tabmenu""><a
							class="nav-link" aria-current="page" href="myPage_info"><i
								class="bi bi-person fs-5"></i> 내 정보 수정 </a></li>
					</ul>
				</div>
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<form action="" method="post">
					<div class="chartjs-size-monitor">
						<div class="chartjs-size-monitor-expand">
							<div class=""></div>
						</div>
						<div class="chartjs-size-monitor-shrink">
							<div class=""></div>
						</div>
					</div>
					<div
						class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 class="h3">문의 내역</h1>
					</div>

					<div class="col-lg-9 ml-auto bg-white sticky-top py-2">
						<div class="row mb-3">
							<!-- <div class="col-md-3">
					태그 공간
					<select class="form-select">
						<option selected>태그</option>
						<option value="1">오류</option>
						<option value="2">자유게시판</option>
					</select>
				</div> -->

							<div class="col-md-6">
								<!-- 제목창 공간 -->
								<div class="form-group">
									작성자 : ${bList.writer }
								</div>
							</div>
							<div class="col-md-6">
								<!-- 제목창 공간 -->
								<div class="form-group text-end">
									작성일 : ${bList.regdate }
								</div>
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-md-12">
								<!-- 제목창 공간 -->
								<div class="form-group">
									제목 : ${bList.title }
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									${bList.content }
								</div>
							</div>
						</div>
						<hr>
						<div class="row mt-3">
							<div class="text-end">
								<button type="submit" formaction="query_insert.do" formmethod="post"
									class="btn btn-primary btn btn-block btn-my" onclick="">확인</button>
								<button type="button" class="btn btn-primary btn btn-block btn-my" 
									onclick="location.href='myPage_querylist'">취소</button>
							</div>
						</div>
					</div>
				</form>
			</main>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>