<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%

    String memberId = request.getParameter("member_id");
    String memberPw = request.getParameter("member_pw");
    String memberName = request.getParameter("member_name");
    String phoneNumber = request.getParameter("phone_number");
   %>
    <p>아이디 : <%= memberId %></p>
    <p>비밀번호 : <%= memberPw %></p>
    <p>이름 : <%= memberName %></p>
    <p>전화번호 : <%= phoneNumber %></p> 
<body>
</html>