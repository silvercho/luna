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

<%-- <jsp:include page="../layout/header.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include> --%>
<style>
.row{
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
}
</style>
</head>
<body>



<!-- 글작성 -->
		<div class="col-lg-9 ml-auto bg-white sticky-top py-2">
			<div class="row">
				<div class="col-md-4">
					<h4 class="text-dark mb-0">자유게시판 글쓰기</h4>

				</div>
				<div>
					<hr width = "75%">
				</div>
			</div>
			<div class="row">
				<div class="col-md-1">
					<!-- 태그 공간 -->
					<select class="form-select">
						<option selected>태그</option>
						<option value="1">이용후기</option>
						<option value="2">자유게시판</option>
					</select>
				</div>

				<div class="col-md-8">
					<!-- 제목창 공간 -->
					<input type="text" class="form-control" placeholder="제목">
				</div>
			</div>
			<div class="row">
				<div class="col-md-9">
					<br>
					<div class="form-group">
						<textarea class="form-control" rows="20" name="bdContent"
							placeholder="내용을 입력해주세요"></textarea>
					</div>
				</div>
			</div>
			<div class="row">

				<div class="col-md-7"></div>
				<div class="col-md-3">
					<br>
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-primary">등록</button>
						<button type="button" class="btn btn-primary">수정</button>
						<button type="button" class="btn btn-danger">삭제</button>
					</div>
				</div>

			</div>
		</div>
		
		<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</body>
</html>