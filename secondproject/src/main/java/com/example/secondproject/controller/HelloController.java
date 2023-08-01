package com.example.secondproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HelloController {
    @GetMapping("/hi")
        public String nice(Model model) {
            model.addAttribute("username", "seongeun");
        return "greetings";
        }
    }

