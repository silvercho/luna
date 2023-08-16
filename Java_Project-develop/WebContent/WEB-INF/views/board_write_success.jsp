<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:url var='root' value='/'/>
<script>
	alert('저장되었습니다')
	location.href = '${root}board_read?board_info_idx=${writeContentBean.content_board_idx}&content_idx=${writeContentBean.content_idx}&page=1'
</script>