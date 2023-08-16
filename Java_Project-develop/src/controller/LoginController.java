package controller;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.function.RenderingResponse;

import dao.MemberDAO;
import model.MemberVO;
import util.ScriptUtils;

@Controller
@SessionAttributes("user")
public class LoginController {
	@Autowired
	MemberDAO mdao;

	@Autowired
	MemberVO mvo;

	@GetMapping("/login")
	public String login() {

		return "loginForm";
	}

	@PostMapping("/login.do")
	public void loginDo(Model model, HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		int result = mdao.login(id, pwd);

		if (result == 1) {

			mvo = mdao.readId(id);

			System.out.println("로그인 성공");
			model.addAttribute("user", mvo);

			try {
				response.sendRedirect("mainForm");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			System.out.println("로그인 실패");
			try {
				ScriptUtils.alertAndBackPage(response, "아이디 또는 비밀번호가 일치하지 않습니다.");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	@GetMapping("/logout")
	public String logout(SessionStatus status) {
		status.setComplete();

		return "redirect:/mainForm";
	}

}
