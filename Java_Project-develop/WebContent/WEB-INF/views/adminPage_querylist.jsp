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
						<li data-tab="adminPage_members" class="nav-item tabmenu" id="default"><a class="nav-link" aria-current="page"
							href="adminPage_members"><i class="bi bi-chat-text fs-5"></i> 회원 리스트</a></li>
						<li data-tab="adminPage_querylist" class="nav-item tabmenu"><a class="nav-link active" aria-current="page"
							href="adminPage_querylist"><i class="bi bi-chat-text fs-5"></i> 회원 문의 내역 </a></li>
					</ul>
				</div>				
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

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
					<h1 class="h3">회원 문의 내역</h1>
				</div>

				<div class="table-responsive">
					<table class="table table-hover table-sm">
						<colgroup>
							<col class="size01" data-alias="number">
							<col class="size02" data-alias="subject">
							<col class="size03" data-alias="writer">
							<col class="size04" data-alias="date">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">번호</th>
								<th scope="col">제목</th>
								<th scope="col">글쓴이</th>
								<th scope="col">등록일</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${fn:length(list) > 0}">
									<c:forEach items="${list }" var="bList">
										<tr>
											<th scope="row">${bList.bno }</th>
											<td>
												<a class="nav-link" style="color: #222" href="adminPage_querylist_select?bno=${bList.bno}&writer=${bList.writer}"> ${bList.title }</a>
											</td>											
											<td>${bList.writer }</td>
											<td>${bList.regdate }</td>
										</tr>
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="5">작성한 글이 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
				</div>

				<div>
					<ul class="pagination pagination-sm justify-content-center">
						<c:if test="${pageMaker.prev }">
							<li class="page-item"><a class="page-link"
								href='<c:url value="adminPage_querylist?page=${pageMaker.startPage-1 }"/>'>이전</a>
							</li>
						</c:if>
						<c:forEach begin="${pageMaker.startPage }"
							end="${pageMaker.endPage }" var="pageNum">
							<li class="page-item"><a class="page-link"
								href='<c:url value="adminPage_querylist?page=${pageNum }"/>'>${pageNum }</a>
							</li>
						</c:forEach>
						<c:if test="${pageMaker.next && pageMaker.endPage > 0 }">
							<li class="page-item"><a class="page-link"
								href='<c:url value="adminPage_querylist?page=${pageMaker.endPage+1 }"/>'>다음</a>
							</li>
						</c:if>
					</ul>
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