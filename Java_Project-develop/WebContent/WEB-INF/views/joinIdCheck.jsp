<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>아이디 중복 확인</h2>
<form action="idCheck.do" method="get" name="frm">
	아이디 <input type="text" name="userid" value="${userid}">
	    <input type="submit" value="중복 체크"><br>
	    
	<c:if test="${result == 1 }">
		<script type="text/javascript">
			opener.document.frm.id.value="";
			console.log()
			/*opener 객체는 자기 자신을 오프한 기존 창의 window 객체를 참조한다. */
		</script>
		<br>${userid}는 <span style="color:#FF0000">이미 사용 중인</span> 아이디입니다.
	</c:if>
</form><br>

<c:if test="${result == -1 }">
	${userid}는 <span style="color:#008000">사용 가능한</span> 아이디입니다.
	<input type="button" value="사용" onclick="idok('${userid}')">
</c:if>

<script>
	function idok(userid){
		console.log("idok : " + userid);
		opener.document.frm.id.value = userid;
		self.close();
	}
</script>
</body>
</html>