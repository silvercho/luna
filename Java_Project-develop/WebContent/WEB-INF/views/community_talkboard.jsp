<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url var='root' value='/' />
<%@page import="java.util.*"%>
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
	<%-- <%
		// 화면에 보여질 게시글의 개수를 지정
		int pageSize=10;
	
	    // 현재 카운터를 클리어한 번호값을 읽어 옴
	    String pageNum=request.getParameter("pageNum");
	    
	    if(pageNum == null){
	    	pageNum="1";
	    }
	    
	    int count=0; // 전체글의 개수 저장
	    int number=0; // 페이지 넘버링
	    
	    int currentPage=Integer.parseInt(pageNum);
	    BoardDAO bdao=new BoardDAO();
	    count=bdao.getAllCount();
	    
	    // 현재 페이지에 보여 줄 시작 번호를 설정 ==> 데이터 베이스에서 불러올 시작 번호
	    int startRow=(currentPage-1)*pageSize+1;//1 11 21 31 
	    int endRow=currentPage*pageSize;//10 20 30 40
	    
	    // 최신글 10개를 기준으로 게시글을 리턴 받아주는 메서드 호출
	    Vector<BoardBean> vec=bdao.getAllBoard(startRow, endRow);
	    
	    // 테이블에 표시할 번호 지정
	    number=count-(currentPage-1)*pageSize;
	%> --%>

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
							class="nav-link" aria-current="page"
							href="search_station_default"><i class="bi bi-card-text fs-5"></i>
								전국 충전소 검색하기 </a></li>

						<li data-tab="community_notice" class="nav-item tabmenu""><a
							class="nav-link" aria-current="page" href="community_notice"><i
								class="bi bi-person fs-5"></i> 공지사항 </a></li>
						<li data-tab="community_review" class="nav-item tabmenu""><a
							class="nav-link" aria-current="page" href="community_review"><i
								class="bi bi-chat-text fs-5"></i> 이용후기 </a></li>
						<li data-tab="community_talkboard" class="nav-item tabmenu"">
							<a class="nav-link" aria-current="page"
							href="community_talkboard"><i class="bi bi-card-text fs-5"></i>
								자유게시판 </a>
						</li>
					</ul>
				</div>
			</nav>

			<main id="tabcontent" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<div
					class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 class="h3">자유게시판</h1>
				</div>

				<div class="table-responsive">
					<table class="table table-hover table-sm">
						<colgroup>
							<col class="size01" data-alias="number">
							<col class="size02" data-alias="subject">
							<col class="size03" data-alias="writer">
							<col class="size04" data-alias="date">
							<col class="size05" data-alias="hit">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">번호</th>
								<th scope="col">제목</th>
								<th scope="col">글쓴이</th>
								<th scope="col">등록일</th>
								<th scope="col">조회수</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>2</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>3</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
							<tr>
								<td class="num"><span>1</span></td>
								<td class="tit">
									<div class="text-wrap">
										<a class="subject-link" href=""> <span class="category">[수다]</span>
											"내용1"
										</a>
									</div>
								</td>
								<td class="user">유저닉네임</td>
								<td class="date">날짜</td>
								<td class="view">조회수</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="row">
					<div class="col-md-3">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="게시판검색">
							<button class="btn btn-outline-primary" type="button">
								검색</button>
						</div>
					</div>
					<div class="col-md-9 text-end">
						<a href="${root }board_write?board_info_idx=${board_info_idx}"
							class="btn btn-primary">글쓰기</a>
					</div>
					<div class="d-none d-md-block">
						<ul class="pagination justify-content-center">
							<c:choose>
								<c:when test="${pageBean.prevPage <= 0 }">
									<li class="page-item disabled"><a href="#"
										class="page-link">이전</a></li>
								</c:when>
								<c:otherwise>
									<li class="page-item"><a
										href="${root }board/main?board_info_idx=${board_info_idx}&page=${pageBean.prevPage}"
										class="page-link">이전</a></li>
								</c:otherwise>
							</c:choose>


							<c:forEach var='idx' begin="${pageBean.min }"
								end='${pageBean.max }'>
								<c:choose>
									<c:when test="${idx == pageBean.currentPage }">
										<li class="page-item active"><a
											href="${root }board/main?board_info_idx=${board_info_idx}&page=${idx}"
											class="page-link">${idx }</a></li>
									</c:when>
									<c:otherwise>
										<li class="page-item"><a
											href="${root }board/main?board_info_idx=${board_info_idx}&page=${idx}"
											class="page-link">${idx }</a></li>
									</c:otherwise>
								</c:choose>

							</c:forEach>

							<c:choose>
								<c:when test="${pageBean.max >= pageBean.pageCnt }">
									<li class="page-item disabled"><a href="#"
										class="page-link">다음</a></li>
								</c:when>
								<c:otherwise>
									<li class="page-item"><a
										href="${root }board/main?board_info_idx=${board_info_idx}&page=${pageBean.nextPage}"
										class="page-link">다음</a></li>
								</c:otherwise>
							</c:choose>

						</ul>
					</div>

					<%-- <div class="text-right">
						<a href="${root }board_write?board_info_idx=${board_info_idx}"
							class="btn btn-primary">글쓰기</a>
					</div> --%>
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