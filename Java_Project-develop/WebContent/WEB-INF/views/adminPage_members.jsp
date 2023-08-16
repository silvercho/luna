<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
						<li data-tab="adminPage_members" class="nav-item tabmenu" id="default"><a class="nav-link active" aria-current="page"
							href="adminPage_members"><i class="bi bi-chat-text fs-5"></i> 회원 리스트</a></li>
						<li data-tab="adminPage_querylist" class="nav-item tabmenu"><a class="nav-link" aria-current="page"
							href="adminPage_querylist"><i class="bi bi-chat-text fs-5"></i> 회원 문의 내역 </a></li>
					</ul>
				</div>
			</nav>
			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<div
					class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 class="h3">회원 리스트</h1>
				</div>

				<div class="table-responsive">
					<table class="table table-hover table-sm">
						<colgroup>
							<col class="size06" data-alias="id">
							<col class="size06" data-alias="pwd">
							<col class="size06" data-alias="userName">
							<col class="size06" data-alias="nickName">
							<col class="size06" data-alias="email">
							<col class="size06" data-alias="phone">
							<col class="size06" data-alias="ctype">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">아이디</th>
								<th scope="col">비밀번호</th>
								<th scope="col">이름</th>
								<th scope="col">닉네임</th>
								<th scope="col">이메일</th>
								<th scope="col">전화번호</th>
								<th scope="col">충전타입</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="member" items="${members}">
								<tr>
									<td class="tit">
										<div class="text-wrap">
											<a class="nav-link" style="color: #222" 
												href="adminPage_memberInfo?id=${member.id}"> <span
												class="category"></span> ${member.id}
											</a>
										</div>
									</td>
									<td>${member.pwd}</td>
									<td>${member.userName}</td>
									<td>${member.nickName}</td>
									<td>${member.email}</td>
									<td>${member.phone}</td>
									<td>${member.chargingType}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
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