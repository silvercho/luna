package com.example.firstproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstController {
//    @GetMapping("/hi") //주소줄에 hi를입력하면 hello로 반환
    @GetMapping("hello") //주소줄에 입력값
    public String itsmine(){
        return "hello";
    }

    @GetMapping("/hi")
    public String greetings1(Model model){
        model.addAttribute("username","김봉식");
                return "greetings";
    }

    @GetMapping("/bye")
    public String greetings2(Model model){
        model.addAttribute("username","홍길동");
        return "goodbye";
    }

}


