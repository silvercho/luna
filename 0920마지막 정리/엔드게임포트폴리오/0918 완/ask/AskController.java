package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import study.EndGame.dto.AskDto;
import study.EndGame.dto.ReplyDto;
import study.EndGame.entity.User;
import study.EndGame.service.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login")
public class AskController {

    private final AskService askService;
    private final ReplyService replyService;
    private final UserService userService;

    @GetMapping("/ask/save")
    public String saveForm(Model model, Authentication auth){

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }

        return "ask/save";

    }

//    @GetMapping("/community/save")
//    public String saveForm(Model model, Authentication auth){
//        if(auth != null) {
//            User loginUser = userService.getLoginUserByLoginId(auth.getName());
//            if (loginUser != null) {
//                model.addAttribute("nickname", loginUser.getNickname());
//            }
//        }
//        return "community/save";
//    }

    @PostMapping("/ask/save")
    public String save(@ModelAttribute AskDto askDto) throws IOException {
        System.out.println("askDto = " + askDto);
        askService.save(askDto);
        return "redirect:/security-login/ask";
    }


    @GetMapping("/ask/{id}")
    public String findById(@PathVariable Long id, Model model, Authentication auth,
                           @PageableDefault(page=1) Pageable pageable) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }
        /*
            해당 게시글의 조회수를 하나 올리고
            게시글 데이터를 가져와서 detail.html 에 출력
         */
        askService.updateHits(id);
        AskDto askDto = askService.findById(id);
        /* 댓글 목록 가져오기 */
        List<ReplyDto> replyDtoList = replyService.findAll(id);
        model.addAttribute("replyList", replyDtoList);
        model.addAttribute("ask", askDto);
        model.addAttribute("page", pageable.getPageNumber());
        return "ask/detail";
    }

    @GetMapping("/ask/update/{id}")
    public String updateForm(@PathVariable Long id, Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }

        AskDto askDto = askService.findById(id);
        model.addAttribute("askUpdate", askDto);
        return "ask/update";
    }

    @PostMapping("/ask/update")
    public String update(@ModelAttribute AskDto askDto, Model model) {
        AskDto ask = askService.update(askDto);
        model.addAttribute("ask", ask);
        return "ask/detail";
    }

    @GetMapping("/ask/delete/{id}")
    public String delete(@PathVariable Long id) {
        askService.delete(id);
        return "redirect:/security-login/ask";
    }

    @GetMapping("/ask")
    public String paging(@PageableDefault(page = 1) Pageable pageable, Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }
//        pageable.getPageNumber();
        Page<AskDto> askList = askService.paging(pageable);
        int blockLimit = 3;
        int startPage = (((int)(Math.ceil((double)pageable.getPageNumber() / blockLimit))) - 1) * blockLimit + 1; // 1 4 7 10 ~~
        int endPage = ((startPage + blockLimit - 1) < askList.getTotalPages()) ? startPage + blockLimit - 1 : askList.getTotalPages();

        // page 갯수 20개
        // 현재 사용자가 3페이지
        // 1 2 3
        // 현재 사용자가 7페이지
        // 7 8 9
        // 보여지는 페이지 갯수 3개
        // 총 페이지 갯수 8개

        model.addAttribute("askList", askList);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        return "ask/paging";

    }
}
