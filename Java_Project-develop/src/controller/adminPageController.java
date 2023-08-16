package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

import dao.AnswerDAO;
import dao.MemberDAO;
import dao.QueryDAO;
import model.AnswerVO;
import model.Criteria;
import model.MemberVO;
import model.PageMaker;
import model.QueryVO;
import util.ScriptUtils;

import java.util.ArrayList;
import java.util.List;

@Controller
public class adminPageController {

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

	@Autowired
	AnswerVO avo;

	@GetMapping("/adminPage")
	public String adminPage() {

		return "forward:/adminPage_members";
	}

	@GetMapping("/adminPage_members")
	public String adminPage_members(Model model) {
		List<MemberVO> members = mdao.findMembers();
		model.addAttribute("members", members);

		return "adminPage_members";
	}

	@GetMapping("/adminPage_memberInfo")
	public String adminPage_memberInfo(Model model, HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		System.out.println(id + " : 시도");

		MemberVO member = mdao.read(id);

		if (member != null) {

			System.out.println(id + " : 성공");
			model.addAttribute("userinfo", member);

		}
		return "adminPage_memberInfo";
	}

	@PostMapping("/admin_modify.do")
	public void admin_modify(MemberVO user, Model model, HttpServletRequest request, HttpServletResponse response) {
		MemberVO mvo;

		try {
			mvo = new MemberVO();
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

			int result = mdao.update(mvo);

			if (result == 1) {

				System.out.println("수정완료");

				try {
					ScriptUtils.alertAndMovePage(response, "수정에 성공했습니다.", "adminPage_members");
				} catch (Exception e) {
					e.printStackTrace();
				}

			} else {
				System.out.println("수정실패");
				try {
					ScriptUtils.alertAndMovePage(response, "수정에 실패했습니다.", "adminPage_members");
				} catch (Exception e) {
					e.printStackTrace();
				}

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		/* return "forward:/adminPage_members"; */
	}

	@PostMapping("/admin_delete.do")
	public void admin_delete(MemberVO user, Model model, HttpServletRequest request, HttpServletResponse response) {
		int result = mdao.delete(user.getId());

		try {
			if (result == 1) {

				System.out.println("삭제완료");

				try {
					ScriptUtils.alertAndMovePage(response, "삭제에 성공했습니다.", "adminPage_members");
				} catch (Exception e) {
					e.printStackTrace();
				}

			} else {
				System.out.println("삭제실패");
				try {
					ScriptUtils.alertAndMovePage(response, "삭제에 실패했습니다.", "adminPage_members");
				} catch (Exception e) {
					e.printStackTrace();
				}

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@GetMapping("/adminPage_querylist")
	public ModelAndView adminPage_querylist(Criteria cri) {

		ModelAndView mav = new ModelAndView("adminPage_querylist");

		PageMaker pageMaker = new PageMaker();
		pageMaker.setCri(cri);
		pageMaker.setTotalCount(qdao.countAllBoard());

		System.out.println("adminPage_querylist : " + pageMaker.getTotalCount());

		ArrayList<QueryVO> list = qdao.allQuery(cri);
		mav.addObject("list", list);
		mav.addObject("pageMaker", pageMaker);

		/*
		 * System.out.println(cri.getPageStart());
		 * System.out.println(cri.getPerPageNum());
		 */

		return mav;
	}

	@GetMapping("/adminPage_querylist_select")
	public String adminPage_querylist_select(Model model, HttpServletRequest request, HttpServletResponse response) {
		String bno = request.getParameter("bno");
		String writer = request.getParameter("writer");
		System.out.println(bno + ", " + writer);

		qvo = qdao.oneQuery(Integer.parseInt(bno), writer);

		if (qvo != null) {
			System.out.println("Content : " + qvo.getContent());

			model.addAttribute("title", "[RE]: " + qvo.getTitle());
			model.addAttribute("rebno", qvo.getBno());

		}

		avo = adao.oneQuery(Integer.parseInt(bno));

		if (avo != null) {
			model.addAttribute("avo", avo);
		}
		
		System.out.println(avo.getWriter());

		return "adminPage_answer";
	}

	@PostMapping("/answer_insert.do")
	public String query_insert(@SessionAttribute("user") MemberVO user, AnswerVO avo) {
		System.out.println(user.getNickName() + ", " + avo.getRebno());
		avo.setWriter(user.getNickName());

		adao.insertBoard(avo);

		return "redirect:/adminPage_querylist";
	}

}
