<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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
					<span>관리자 페이지</span>
				</h4>
				<div class="position-sticky pt-3">
					<ul class="nav flex-column tab">
						<li data-tab="adminPage_members" class="nav-item tabmenu"
							id="default"><a class="nav-link" aria-current="page"
							href="adminPage_members"><i class="bi bi-chat-text fs-5"></i>
								회원 리스트</a></li>
						<li data-tab="adminPage_querylist" class="nav-item tabmenu"><a
							class="nav-link active" aria-current="page"
							href="adminPage_querylist"><i class="bi bi-chat-text fs-5"></i>
								회원 문의 내역 </a></li>
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
						<h1 class="h3">회원 문의 답변</h1>
					</div>

					<div class="col-lg-9 ml-auto bg-white sticky-top py-2">
						<div class="row">
							<div class="col-md-12">
								<!-- 제목창 공간 -->
								<input type="text" class="form-control" placeholder="제목"
									name="title" id="title" value="${title}">
							</div>
						</div>
						<div class="row" style="display: none;">
							<div class="col-md-12">
								<input type="text" class="form-control" name="rebno" id="rebno"
									value="${rebno}">
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<br>
								<c:choose>
									<c:when test="${avo.writer == null }">
										<div class="form-group">
											<textarea class="form-control" rows="20" name="content"
												placeholder="답변을 입력해주세요"></textarea>
										</div>
									</c:when>
									<c:otherwise>
										<div class="form-group">
											<textarea class="form-control" rows="20" name="content"
												placeholder="답변을 입력해주세요" readonly="readonly">${avo.content }</textarea>
										</div>
									</c:otherwise>
								</c:choose>
							</div>
						</div>
						<div class="row mt-3">
							<div class="text-end">
								<c:choose>
									<c:when test="${avo.writer == null }">
										<button type="submit" formaction="answer_insert.do"
											formmethod="post"
											class="btn btn-primary btn btn-block btn-my" onclick="">확인</button>
										<button type="button"
											class="btn btn-primary btn btn-block btn-my"
											onclick="location.href='adminPage_querylist'">취소</button>
									</c:when>
									<c:otherwise>
										<button type="button"
											class="btn btn-primary btn btn-block btn-my"
											onclick="location.href='adminPage_querylist'">취소</button>
									</c:otherwise>
								</c:choose>
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