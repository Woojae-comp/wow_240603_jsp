/**
 * joinCheck.js
 */

function joinCheck() {
	
	/* var form = document.joinForm; */
    /* 아이디가 공란으로 입력되었는지 유효성 검사 */
    if (document.joinForm.member_id.value.length == 0) {
        alert("아이디는 필수 입력사항 입니다.");
        form.member_id.focus();
        return false;
    }
    
    if (document.joinForm.member_id.value.length < 4 || document.joinForm.member_id.value.length > 15) {
        alert("아이디는 4자 이상 15자 이하.");
        return false;
    }


    if (document.joinForm.member_pw.value.length == 0) {
        alert("비밀번호는 필수 입력사항 입니다.");
        form.member_id.focus();
        return false;
    }
    
    if (document.joinForm.member_pw.value.length < 5) {
        alert("비번 5자 이상");
        return false;
    }
       
 
    if (document.joinForm.member_name.value.length == 0) {
        form.member_id.focus();
        alert("이름은 필수 입력사항 입니다.");
        return false;
    }
        

    /* 한글 정규표현식 */
    var hangul = /^[ㄱㅏ-힣]*$/;
    if (!hangul.test(document.joinForm.member_name.value)) {
        alert("이름은 한글만 가능합니다.");
        return false;
    }        
       
       
    if (document.joinForm.phone_number.value.length == 0) {
        alert("전화번호는 필수 입력사항 입니다.");
        form.member_id.focus();
        return false;
    }
    
    /* 전화번호 숫자만 */
	var number = /^[0-9]*$/;
    if (!number.test(document.joinForm.phone_number.value)) {
        alert("전화번호는 숫자만 입력하세요. \n 다시 확인해주세요");
        return false;
    }


    return true;
}
