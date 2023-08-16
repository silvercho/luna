package controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import dao.MemberDAO;
import model.MemberVO;

@Controller
public class JoinController {
	
	@Autowired
	MemberDAO mdao;
	
	@Autowired
	MemberVO mvo;
	
	@GetMapping("/join")
	public String join() {
		
		return "joinForm";
	}
	
	@PostMapping("/join.do")
	public String joindo(HttpServletRequest request) {
		
		try {
			mvo.setId(request.getParameter("id"));
			mvo.setPwd(request.getParameter("pwd"));
			mvo.setUserName(request.getParameter("userName"));
			mvo.setEmail(request.getParameter("email"));
			mvo.setNickName(request.getParameter("nickName"));
			mvo.setAddress1(request.getParameter("address1"));
			mvo.setAddress2(request.getParameter("address2"));
			mvo.setPhone(request.getParameter("phone"));
			mvo.setJoinRoute(request.getParameter("joinRoute"));
			mvo.setChargingType(request.getParameter("chargingType"));			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		int result=mdao.insert(mvo);
		
		if(result == 1) {
			return "loginForm";
		}else {
			return "joinForm";
		}
	}
	
	@PostMapping("idCheck")
	@ResponseBody
	public int idCheck(@RequestParam("id") String id) {
		System.out.println("id: "+id);
		int cnt=mdao.isExistId(id);
		System.out.println("cnt: "+cnt);
		
		return cnt;
	}
	
	@PostMapping("nickNameCheck")
	@ResponseBody
	public int nickNameCheck(@RequestParam("nickName") String nickName) {
		System.out.println("nickName: "+nickName);
		int cnt=mdao.isExistNickName(nickName);
		System.out.println("cnt: "+cnt);
		
		return cnt;
	}
	
	@PostMapping("pwdCheck")
	@ResponseBody
	public int pwdCheck(@RequestParam("pwd") String pwd,@RequestParam("pwdCheck") String pwdCheck) {
		int cnt=-1;
		
		System.out.println("pwd: "+pwd);
		System.out.println("pwdCheck: "+pwdCheck);
		
		if(pwd == pwdCheck) {
			cnt=1;
		}else {
			cnt=-1;
		}
		
		System.out.println(cnt);
		
		return cnt;
	}
	
	@GetMapping("idCheck.do")
	public String idCheck(HttpServletRequest request) {
		String userId = request.getParameter("userid");
		int result = mdao.isExistId(userId);
			
		request.setAttribute("userid", userId);
		request.setAttribute("result", result);
		
		System.out.println("idCheck : " + userId);
		return "joinIdCheck";
	}

	@GetMapping("nnCheck.do")
	public String nnCheck(HttpServletRequest request) {
		String nickName = request.getParameter("nickname");
		int result = mdao.isExistNickName(nickName);

		request.setAttribute("nickname", nickName);
		request.setAttribute("result", result);
		
		System.out.println("nnCheck : " + nickName);		
		return "joinNickNameCheck";
	}

}
