<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="script/member.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

<link rel="stylesheet" type="text/css" href="css/joinForm.css">
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
							class="nav-link active" aria-current="page" href="myPage_info"><i
								class="bi bi-person fs-5"></i> 내 정보 수정 </a></li>
					</ul>
				</div>
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<div
					class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 class="h3">내 정보 수정</h1>
				</div>

				<div class="container">
					<div class="input-form col-md-12 mx-auto">
						<form name="form" class="validation-form" id="form" novalidate>
							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="id">아이디</label> <input type="text"
										class="form-control" name="id" id="id" placeholder=""
										value="${userinfo.id }" required readonly>
									<!-- 수정 불가 -->
								</div>
								<div class="col-md-6 mb-3">
									<label for="pwd">비밀번호</label> <input type="text"
										class="form-control" name="pwd" id="pwd" placeholder=""
										value="${userinfo.pwd }" required>
									<!-- 수정 불가 -->
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="name">이름</label> <input type="text"
										class="form-control" name="userName" id="userName"
										placeholder="" value="${userinfo.userName }" required>
									<div class="invalid-feedback">이름을 입력해주세요.</div>
								</div>
								<div class="col-md-6 mb-3">
									<label for="nickname">별명</label> <input type="text"
										class="form-control" name="nickName" id="nickName"
										placeholder="" value="${userinfo.nickName }" required readonly>
									<div class="invalid-feedback">별명을 입력해주세요.</div>
								</div>
							</div>
							<div class="mb-3">
								<label for="email">이메일</label> <input type="email"
									class="form-control" name="email" id="email" placeholder=""
									value="${userinfo.email }" required>
								<div class="invalid-feedback">이메일을 입력해주세요.</div>
							</div>

							<div class="row">
								<div class="col-md-9 mb-3">
									<label for="address">주소</label> <input type="text"
										class="form-control" name="address1" id="address1"
										placeholder="서울특별시 강남구" value="${userinfo.address1 }" required>
									<div class="invalid-feedback">주소를 입력해주세요.</div>
								</div>
								<div class="col-md-3 mb-3">
									<button class="btn btn-primary btn-block" type='button'
										style="margin-top: 24px;" onclick="onPostCode()">주소 검색</button>
								</div>
							</div>

							<div class="mb-3">
								<label for="address2">상세주소<span class="text-muted">&nbsp;
										(필수아님)</span></label> <input type="text" class="form-control" name="address2"
									id="address2" placeholder="상세주소를 입력해주세요."
									value="${userinfo.address2 }">
							</div>

							<div class="row">
								<div class="col-md-6 mb-3">
									<label for="phone">전화번호</label> <input type="text"
										class="form-control" name="phone" id="phone" placeholder=""
										value="${userinfo.phone }" required>
									<div class="invalid-feedback">전화번호를 입력해주세요.</div>
								</div>
								<div class="col-md-6 mb-3">
									<label for="root">가입 경로</label> <select
										class="form-select d-block w-100" name="joinRoute"
										id="joinRoute">
										<option value="${userinfo.joinRoute }" hidden="">${userinfo.joinRoute }</option>
										<option>검색</option>
										<option>카페</option>
										<option>지인 권유</option>
									</select>
									<div class="invalid-feedback">가입 경로를 선택해주세요.</div>
								</div>
							</div>

							<div class="row">
								<div class="mb-3">
									<label for="chargingType">충전 타입</label> <select
										class="form-select d-block w-100" name="chargingType"
										id="chargingType">
										<option value="${userinfo.chargingType }" hidden="">${userinfo.chargingType }</option>
										<option>완속</option>
										<option>차데모</option>
										<option>콤보</option>
										<option>AC3상</option>
									</select>
									<div class="invalid-feedback">충전 타입을 선택해주세요.</div>
								</div>
							</div>

							<div class="row mt-3">
								<div class="col-lg-6 col-sm-6 text-lg-middle text-center">
									<button type="submit" formaction="modify.do" formmethod="post"
										class="btn btn-primary btn-lg btn-block btn-my" onclick="">수정</button>
								</div>
								<div class="col-lg-6 col-sm-6 text-lg-middle text-center">
									<button type="submit" formaction="delete.do" formmethod="post"
										class="btn btn-primary btn-lg btn-block btn-my" onclick="">탈퇴</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>

	<!--
	<script>
		window.addEventListener('load', () => {
			const forms = document.getElementsByClassName('validation-form');
			Array.prototype.filter.call(forms, (form) => {
				form.addEventListener('submit', function (event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	</script>	
	-->

	<script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script>
		function onPostCode() {
			console.log("onPostCode")
			daum.postcode
					.load(function() {
						new daum.Postcode(
								{
									oncomplete : function(data) {
										console.log("oncomplete")
										document.getElementById("address1").value = data.roadAddress;
									}
								}).open();
					});
		}

		function onModify() {
			if (confirm("정말 수정하시겠습니까?") == true) {
				document.form.addEventListener('submit', function(event) {
					if (document.form.checkValidity() == false) {
						event.preventDefault();
						event.stopPropagation();
					} else
						document.form.submit();
					document.form.classList.add('was-validated');
				}, false);
			} else {

			}
		}

		function onDelete() {
			if (confirm("정말 탈퇴하시겠습니까?") == true) {

			} else {

			}
		}
	</script>
</body>
</html>