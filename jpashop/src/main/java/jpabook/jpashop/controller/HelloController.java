package jpabook.jpashop.controller;

import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String index(){
        return "index";
    }
@GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello!");
        return "hello";
    }
    @GetMapping("hello2")
    public String hello2(Model model) {
        model.addAttribute("data1", "성은");
        model.addAttribute("data", "hello!");
        return "hello2";
    }
}
