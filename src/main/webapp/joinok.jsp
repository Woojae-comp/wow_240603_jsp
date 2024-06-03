<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<script type="text/javascript" src="js/joinCheck.js"></script>
</head>
<body>
	<h2>회원가입</h2>
	<hr>
	<form action="receive.jsp" method="get" name="joinForm" onsubmit="return joinCheck()">
		아이디 : <input type="text" name="member_id"><br><br>
		암 호 : <input type="password" name="member_pw"><br><br>
		이 름 : <input type="text" name="member_name"> <br><br>
		전화번호 : <input type="text" name="phone_number"> * 숫자만 입력하세요. <br><br>
		<input type="submit" value="회원가입">
	</form>
</body>
</html>