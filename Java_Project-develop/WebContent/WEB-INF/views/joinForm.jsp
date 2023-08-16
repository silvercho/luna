<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../script/member.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">

<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">

<jsp:include page="../layout/header_ver2.jsp"></jsp:include>
<jsp:include page="../layout/footer.jsp"></jsp:include>

<style type="text/css">
header {
	height: 25px;
}

main {
	min-height: 600px;
}

body {
	/* background-color: #f5f5f5; */
	
}

.input-form {
	max-width: 680px;
	margin-top: 80px;
	margin-bottom: 80px;
	padding: 32px;
	background: #fff;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
	-webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
	box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
}

.id_ok {
	color: #008000;
	display: none;
}

.id_already {
	color: #FF0000;
	display: none;
}

.nickName_ok {
	color: #008000;
	display: none;
}

.nickName_already {
	color: #FF0000;
	display: none;
}

.pwd_ok {
	color: #008000;
	display: none;
}

.pwd_already {
	color: #FF0000;
	display: none;
}
</style>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript">
	function checkId() {
		var id = $('#id').val(); //id값이 "id"인 입력란의 값을 저장
		$.ajax({
			url : 'idCheck', //Controller에서 인식할 주소
			type : 'post', //POST 방식으로 전달
			data : {
				id : id
			},
			success : function(cnt) {
				if (cnt != 1) { //cnt가 1이 아니면(=0일 경우) -> 사용 가능한 아이디 
					$('.id_ok').css("display", "inline-block");
					$('.id_already').css("display", "none");
				} else { // cnt가 1일 경우 -> 이미 존재하는 아이디
					$('.id_already').css("display", "inline-block");
					$('.id_ok').css("display", "none");
				}
			},
			error : function() {
				alert("에러입니다");
			}
		});
	};
</script>

<script type="text/javascript">
	function checkNickname() {
		var nickName = $('#nickName').val(); //id값이 "id"인 입력란의 값을 저장
		$.ajax({
			url : 'nickNameCheck', //Controller에서 인식할 주소
			type : 'post', //POST 방식으로 전달
			data : {
				nickName : nickName
			},
			success : function(cnt) {
				if (cnt != 1) { //cnt가 1이 아니면(=0일 경우) -> 사용 가능한 아이디 
					$('.nickName_ok').css("display", "inline-block");
					$('.nickName_already').css("display", "none");
				} else { // cnt가 1일 경우 -> 이미 존재하는 아이디
					$('.nickName_already').css("display", "inline-block");
					$('.nickName_ok').css("display", "none");
				}
			},
			error : function() {
				alert("에러입니다");
			}
		});
	};
	
	var checkRePass = function(){
	    let oPwd = document.getElementById("pwd").value;
	    let cPwd = document.getElementById("pwdCheck").value;
	    if(cPwd != oPwd){
	        document.getElementById("re_passMsg").innerHTML = "비밀번호가 일치하지 않습니다";
	        document.getElementById("re_passMsg").style.display = "block";
	      	return false;
	    }else{
	        document.getElementById("re_passMsg").style.display = "none";
	        return true;
	    }
	}
</script>

</head>

<body>
	<main>
		<div class="container">
			<div class="input-form-backgroud row">
				<div class="input-form col-md-12 mx-auto">
					<h4 class="mb-3">회원가입</h4>
					<form action="join.do" method="post" class="validation-form"
						name="frm" novalidate>
						<div class="row">
							<!-- <div class="col-md-12 mb-3">
							<label for="id">아이디</label> <input type="text"
								class="form-control" name="id" id="id" placeholder="" required oninput = "checkId()">
							<span class="id_ok">사용 가능한 아이디 입니다.</span>
							<span class="id_already">사용 중인 아이디 입니다.</span>
							</div> -->
							<div class="col-md-9 mb-3">
								<label for="id">아이디</label> <input type="text"
									class="form-control" name="id" id="id" placeholder="" required>
								<div class="invalid-feedback">아이디를 입력해주세요.</div>
							</div>
							<div class="col-md-3 mb-3">
								<button class="btn btn-primary btn-block"
									style="margin-top: 30px;" type="button" onclick="onCheckId()">중복체크</button>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6 mb-3">
								<label for="pwd">비밀번호</label> 
								<input type="password"
									class="form-control" name="pwd" id="pwd" placeholder=""
									required>
								<!-- <div class="invalid-feedback">비밀번호를 입력해주세요.</div> -->
							</div>
							<div class="col-md-6 mb-3">
								<label for="pwdCheck">비밀번호 확인</label> 
								<input oninput="checkRePass()" type="password" class="form-control"
									name="pwdCheck" id="pwdCheck" placeholder="" required>
								<!-- <div class="invalid-feedback">비밀번호를 입력해주세요.</div> -->
								<span class="error_next_box" id="re_passMsg"
								style="display: none; color:#FF0000" aria-live="assertive"></span>
							</div>
							
						</div>

						<div class="row">
							<div class="col-md-6 mb-3">
								<label for="name">이름</label> <input type="text"
									class="form-control" name="userName" id="userName"
									placeholder="" value="" required>
								<div class="invalid-feedback">이름을 입력해주세요.</div>
							</div>
							<div class="col-md-6 mb-3">
								<label for="email">이메일</label> <input type="email"
									class="form-control" name="email" id="email"
									placeholder="you@example.com" required>
								<div class="invalid-feedback">이메일을 입력해주세요.</div>
							</div>
						</div>

						<div class="row">
							<!-- <div class="col-md-12 mb-3">
							<label for="nickName">별명</label> <input type="text"
								class="form-control" name= "nickName" id="nickName" placeholder="" value="" required oninput = "checkNickname()">
							<span class="nickName_ok">사용 가능한 별명 입니다.</span>
							<span class="nickName_already">사용 중인 별명 입니다.</span>
							</div> -->
							<div class="col-md-9 mb-3">
								<label for="nickName">별명</label> <input type="text"
									class="form-control" name="nickName" id="nickName"
									placeholder="" value="" required>
								<div class="invalid-feedback">별명을 입력해주세요.</div>
							</div>
							<div class="col-md-3 mb-3">
								<button class="btn btn-primary btn-block"
									style="margin-top: 30px;" type="button"
									onclick="onCheckNickName()">중복체크</button>
							</div>
						</div>
						<div class="row">
							<div class="col-md-9 mb-3">
								<label for="address1">주소</label> <input type="text"
									class="form-control" name="address1" id="address1"
									placeholder="서울특별시 강남구" required>
								<div class="invalid-feedback">주소를 입력해주세요.</div>
							</div>
							<div class="col-md-3 mb-3">
								<button class="btn btn-primary btn-block"
									style="margin-top: 30px;" type="button" onclick="onPostCode()">주소
									검색</button>
							</div>
						</div>
						<div class="mb-3">
							<label for="address2">상세주소<span class="text-muted">&nbsp;(필수
									아님)</span></label> <input type="text" class="form-control" name="address2"
								id="address2" placeholder="상세주소를 입력해주세요.">
						</div>
						<div class="row">
							<div class="col-md-6 mb-3">
								<label for="phone">전화번호</label> <input type="text"
									class="form-control" name="phone" id="phone" placeholder=""
									required>
								<div class="invalid-feedback">전화번호를 입력해주세요.</div>
							</div>
							<div class="col-md-6 mb-3">
								<label for="joinRoute">가입 경로</label> <select
									class="custom-select d-block w-100" name="joinRoute"
									id="joinRoute">
									<option value=""></option>
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
									class="custom-select d-block w-100" name="chargingType"
									id="chargingType">
									<option value=""></option>
									<option>완속</option>
									<option>차데모</option>
									<option>콤보</option>
									<option>AC3상</option>
								</select>
								<div class="invalid-feedback">충전타입을 선택해주세요.</div>
							</div>
						</div>
						<hr class="mb-4">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input"
								id="aggrement" required> <label
								class="custom-control-label" for="aggrement">개인정보 수집 및
								이용에 동의합니다.</label>
						</div>
						<div class="mb-4"></div>
						<button class="btn btn-primary btn-lg btn-block"
							onClick="onSubmit()" type="submit">가입 완료</button>
					</form>
				</div>
			</div>
			<footer class="my-3 text-center text-small">
				<p class="mb-1">&copy; 2021 YD</p>
			</footer>
		</div>
	</main>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>

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

		function joinCheck() {

			if (document.frm.name.value.length == 0) {
				alert("이름을 써 주세요.");
				document.frm.name.focus();

				return false;
			}

			if (document.frm.userid.value.length == 0) {
				alert("아이디 써 주세요.");
				document.frm.userid.focus();

				return false;
			}

			if (document.frm.userid.value.length < 4) {
				alert("아이디 4글자 이상이어야 합니다.");
				document.frm.userid.focus();

				return false;
			}

			if (document.frm.pwd.value == "") {
				alert("암호는 반드시 입력해야합니다.");
				document.frm.pwd.focus();

				return false;
			}

			if (document.frm.pwd.value != document.frm.pwd_check.value) {
				alert("암호가 일치하지 않습니다.")
				document.frm.pwd.focus();

				return false;
			}

			if (document.frm.reid.value.length == 0) {
				alert("중복 체크를 하지 않았습니다.");
				document.frm.userid.focus();

				return false;
			}

			return true;

		}

		function onSubmit() {
			document.frm.addEventListener('submit', function(event) {
				if (document.frm.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				} else
					document.frm.submit();
				document.frm.classList.add('was-validated');
			}, false);
		}

		function onCheckId() {

			if (document.frm.id.value == "") {
				alert("아이디를 입력해 주세요.");
				document.frm.id.focus();
				return;
			}

			var url = "idCheck.do?userid=" + document.frm.id.value;
			window.open(url, "_blank_1", "toolbar=no,menubar=no,"
					+ "scrollbars=yes,resizable=no,width=450,height=200");
			return true;
		}

		function onCheckNickName() {
			console.log("onCheckNickName");

			if (document.frm.nickName.value == "") {
				alert("별명을 입력해 주세요.");
				document.frm.nickName.focus();
				return;
			}

			var url = "nnCheck.do?nickname=" + document.frm.nickName.value;
			window.open(url, "_blank_1", "toolbar=no,menubar=no,"
					+ "scrollbars=yes,resizable=no,width=450,height=200");
		}
	</script>


</body>
</html>