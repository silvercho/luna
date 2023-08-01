package com.example.firstproject.controller;

import com.example.firstproject.dto.CoffeeForm;
import com.example.firstproject.entity.Article;
import com.example.firstproject.entity.Coffee;
import com.example.firstproject.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class CoffeeController {
    @Autowired
    private CoffeeRepository coffeeRepository;
    @GetMapping("articles/cnew")
    public  String newCoffeeForm(){
        return  "articles/cnew";
    }

    @PostMapping("articles/createCoffee")
    public  String createCoffeeForm(CoffeeForm form){
        log.info(form.toString());
        Article coffee = form.toEntity();
        log.info(coffee.toString());
        Coffee saved = CoffeeRepository.save(coffee);
        log.info(saved.toString());
        return "redirect:/articles/" + saved.getId();
    }

}
