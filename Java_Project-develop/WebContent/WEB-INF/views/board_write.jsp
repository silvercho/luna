<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:url var='root' value='/'/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

<link rel="stylesheet" type="text/css" href="../css/myPage_review.css">

<jsp:include page="../layout/header.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include>
</head>
<body>


<div class="container" style="margin-top:100px">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
					<form:form action='${root }board_write_pro' method='post' modelAttribute="writeContentBean" enctype="multipart/form-data">
						<form:hidden path="content_board_idx"/>
						<div class="form-group">
							<form:label path="content_subject">제목</form:label>
							<form:input path="content_subject" class='form-control'/>
							<form:errors path='content_subject' style='color:red' />
						</div>
						<div class="form-group">
							<form:label path="content_text">내용</form:label>
							<form:textarea path="content_text" class="form-control" rows="10" style="resize:none"/>
							<form:errors path='content_text' style='color:red'/>
						</div>
						<div class="form-group">
							<form:label path="upload_file">첨부 이미지</form:label>
							<form:input type='file' path='upload_file' class="form-control" accept="image/*"/>
						</div>
						<div class="form-group">
							<div class="text-right">
								<form:button class='btn btn-primary'>작성하기</form:button>
							</div>
						</div>
					
					</form:form>
				</div>
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>
</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>

</body>
</html>
    