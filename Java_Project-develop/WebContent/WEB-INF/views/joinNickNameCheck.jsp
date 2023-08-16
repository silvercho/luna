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
<h2>닉네임 중복 확인</h2>
<form action="nnCheck.do" method="get" name="frm">
	닉네임 <input type="text" name="nickname" value="${nickname}">
	    <input type="submit" value="중복 체크"><br>
	    
	<c:if test="${result == 1 }">
		<script type="text/javascript">
			opener.document.frm.nickName.value="";
			/*opener 객체는 자기 자신을 오프한 기존 창의 window 객체를 참조한다. */
		</script>
		<br>${nickname}는 <span style="color:#FF0000">이미 사용 중인</span> 닉네임입니다.
	</c:if>
</form><br>

<c:if test="${result == -1 }">
	${nickname}는 <span style="color:#008000">사용 가능한</span> 닉네임입니다.
	<input type="button" value="사용" onclick="idok('${nickname}')">
</c:if>
	
<script>
	function idok(nickName){
		console.log("idok : " + nickName);
		opener.document.frm.nickName.value = nickName;
		self.close();
	}
</script>
</body>
</html>