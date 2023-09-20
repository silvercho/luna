package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import study.EndGame.dto.JoinRequest;
import study.EndGame.dto.LoginRequest;
import study.EndGame.entity.User;
import study.EndGame.service.UserService;

import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login")
public class MemberController {

    private final UserService userService;

    @GetMapping("/join")
    public String joinPage(Model model) {

        model.addAttribute("joinRequest", new JoinRequest());
        return "join";
    }

    @PostMapping("/join")
    public String join(@Valid @ModelAttribute JoinRequest joinRequest, BindingResult bindingResult) {

        // loginId 중복 체크
        if(userService.checkLoginIdDuplicate(joinRequest.getLoginId())) {
            bindingResult.addError(new FieldError("joinRequest", "loginId", "로그인 아이디가 중복됩니다."));
        }
        // 닉네임 중복 체크
        if(userService.checkNameDuplicate(joinRequest.getName())) {
            bindingResult.addError(new FieldError("joinRequest", "name", "닉네임이 중복됩니다."));
        }
        // password와 passwordCheck가 같은지 체크
        if(!joinRequest.getPassword().equals(joinRequest.getPasswordCheck())) {
            bindingResult.addError(new FieldError("joinRequest", "passwordCheck", "바밀번호가 일치하지 않습니다."));
        }

        if(bindingResult.hasErrors()) {
            return "join";
        }

        userService.join2(joinRequest);
        return "redirect:/security-login";
    }

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addAttribute("loginRequest", new LoginRequest());
        return "login";
    }

    @GetMapping("/info")
    public String userInfo(Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }

        User loginUser = userService.getLoginUserByLoginId(auth.getName());
        model.addAttribute("user", loginUser);

        return "info";
    }

    @GetMapping("/admin")
    public String adminPage(Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }

        return "admin";
    }

    @GetMapping("/authentication-fail")
    public String authenticationFail() {
        return "errorPage/authenticationFail";
    }

    @GetMapping("/authorization-fail")
    public String authorizationFail() {
        return "errorPage/authorizationFail";
    }
}
