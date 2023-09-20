package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import study.EndGame.dto.CommentDto;
import study.EndGame.dto.CommunityDto;
import study.EndGame.entity.User;
import study.EndGame.service.CommentService;
import study.EndGame.service.CommunityService;
import study.EndGame.service.UserService;

import java.io.IOException;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login")
public class CommunityController {

    private final CommunityService communityService;
    private final CommentService commentService;
    private final UserService userService;

    @GetMapping("/community/save")
    public String saveForm(Model model, Authentication auth){

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }

        return "community/save";

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

    @PostMapping("/community/save")
    public String save(@ModelAttribute CommunityDto communityDto) throws IOException {
        System.out.println("communityDto = " + communityDto);
        communityService.save(communityDto);
        return "redirect:/security-login/community";
    }


    @GetMapping("/community/{id}")
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
            게시글 데이터를 가져와서 detail.html에 출력
         */
        communityService.updateHits(id);
        CommunityDto communityDto = communityService.findById(id);
        /* 댓글 목록 가져오기 */
        List<CommentDto> commentDtoList = commentService.findAll(id);
        model.addAttribute("commentList", commentDtoList);
        model.addAttribute("community", communityDto);
        model.addAttribute("page", pageable.getPageNumber());
        return "community/detail";
    }

    @GetMapping("/community/update/{id}")
    public String updateForm(@PathVariable Long id, Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }

        CommunityDto communityDto = communityService.findById(id);
        model.addAttribute("communityUpdate", communityDto);
        return "community/update";
    }

    @PostMapping("/community/update")
    public String update(@ModelAttribute CommunityDto communityDto, Model model) {
        CommunityDto community = communityService.update(communityDto);
        model.addAttribute("community", community);
        return "community/detail";
    }

    @GetMapping("/community/delete/{id}")
    public String delete(@PathVariable Long id) {
        communityService.delete(id);
        return "redirect:/security-login/community";
    }

    @GetMapping("/community")
    public String paging(@PageableDefault(page = 1) Pageable pageable, Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("nickname", loginUser.getNickname());
            }
        }
//        pageable.getPageNumber();
        Page<CommunityDto> communityList = communityService.paging(pageable);
        int blockLimit = 3;
        int startPage = (((int)(Math.ceil((double)pageable.getPageNumber() / blockLimit))) - 1) * blockLimit + 1; // 1 4 7 10 ~~
        int endPage = ((startPage + blockLimit - 1) < communityList.getTotalPages()) ? startPage + blockLimit - 1 : communityList.getTotalPages();

        // page 갯수 20개
        // 현재 사용자가 3페이지
        // 1 2 3
        // 현재 사용자가 7페이지
        // 7 8 9
        // 보여지는 페이지 갯수 3개
        // 총 페이지 갯수 8개

        model.addAttribute("communityList", communityList);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        return "community/paging";

    }
}
