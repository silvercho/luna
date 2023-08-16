package controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import dao.AnswerDAO;
import dao.MemberDAO;
import dao.QueryDAO;
import model.Criteria;
import model.MemberVO;
import model.PageMaker;
import model.QueryVO;
import util.ScriptUtils;

@Controller
@SessionAttributes("user")
public class myPageController {
	@Autowired
	MemberDAO mdao;

	@Autowired
	MemberVO mvo;
	
	@Autowired
	QueryDAO qdao;
	
	@Autowired
	QueryVO qvo;
	
	@Autowired
	AnswerDAO adao;

	@GetMapping("/myPage")
	public String myPage() {

		return "forward:/myPage_querylist";
	}

	@GetMapping("/myPage_info")
	public String myPage_info(@SessionAttribute("user") MemberVO user, Model model) {
		mvo=mdao.read(user.getId());
		
		model.addAttribute("userinfo",mvo);

		return "myPage_info";
	}
	
	@GetMapping("/myPage_query")
	public String myPage_query() {
		
		return "myPage_query";
	}

	@GetMapping("/myPage_querylist")
	public ModelAndView myPage_querylist(Criteria cri, @SessionAttribute("user") MemberVO user) {
		
		ModelAndView mav=new ModelAndView("myPage_querylist");
		
		mvo=mdao.readId(user.getId());
		
		PageMaker pageMaker = new PageMaker();
		pageMaker.setCri(cri);
		pageMaker.setTotalCount(qdao.countMyBoard(mvo.getNickName()));
		
		ArrayList<QueryVO> list= qdao.myAllQuery(cri, mvo.getNickName());
		mav.addObject("list", list);
		mav.addObject("pageMaker",pageMaker);
		
		/*
		 * System.out.println(cri.getPageStart());
		 * System.out.println(cri.getPerPageNum());
		 */

		return mav;
	}

	@GetMapping("/myPage_review")
	public String myPage_review() {

		return "myPage_review";
	}
	
	@GetMapping("/talkboard_write")
	public String talkboard() {
		
		return "talkboard_write";
	}
	
	@GetMapping("/myPage_query_content")
	public String myPage_query_content(QueryVO qvo, Model model) {
		
		model.addAttribute("bList",qdao.oneQuery(qvo.getBno(), qvo.getWriter()));
		
		return "myPage_query_content";
	}

	@PostMapping("/modify.do")
	public void modify(@SessionAttribute("user") MemberVO user, Model model, HttpServletRequest request,
			HttpServletResponse response) {

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

		} catch (Exception e) {
			e.printStackTrace();
		}

		int result = mdao.update(mvo);

		if (result == 1) {

			System.out.println("수정완료");
			user = mdao.read(user.getId());
			model.addAttribute("user", user);
			try {
				//ScriptUtils.alert(response, "수정에 성공했습니다.");
				response.sendRedirect("myPage_querylist");
			} catch (Exception e) {
				e.printStackTrace();
			}

			//return "myPage_querylist";

		} else {
			System.out.println("수정실패");
			try {
				//ScriptUtils.alert(response, "수정에 실패했습니다.");
				response.sendRedirect("myPage_querylist");
			} catch (Exception e) {
				e.printStackTrace();
			}
			//return "myPage_querylist";

		}

	}

	@PostMapping("/delete.do")
	public void delete(HttpServletRequest request, HttpServletResponse response) {
		String id=request.getParameter("id");
		int result=mdao.delete(id);
		
		if(result == 1) {
			try {
				System.out.println("탈퇴 성공");
				ScriptUtils.alertAndMovePage(response, "정상적으로 탈퇴처리 되었습니다.", "logout");
			}catch (Exception e) {
				e.printStackTrace();
			}
		}else {
			try {
				System.out.println("탈퇴 실패");
				ScriptUtils.alertAndBackPage(response, "탈퇴처리 되지 않았습니다.");
			}catch (Exception e) {
				e.printStackTrace();
			}
		}

	}
	
	@PostMapping("/query_insert.do")
	public String query_insert(@SessionAttribute("user") MemberVO user, QueryVO qvo) {
		
		qvo.setWriter(user.getNickName());
		
		qdao.insertBoard(qvo);
		
		return "redirect:/myPage_querylist";
	}
	
	@GetMapping("/myPage_querylist_select")
	public String myPage_querylist_select(Model model, HttpServletRequest request, HttpServletResponse response) {
		String bno = request.getParameter("bno");
		String writer = request.getParameter("writer");
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		
		//System.out.println("myPage_querylist_select : " + bno + ", " + title + ", " + content);	
				
		ArrayList<String> contents = adao.selectBoard(Integer.parseInt(bno));
		
		if (contents != null) {
			model.addAttribute("answers", contents);		
			model.addAttribute("bno", bno);
			model.addAttribute("writer", writer);
			model.addAttribute("title", title);
			model.addAttribute("content", content);			
		}
				
		return "myPage_answer";
	}	

}
