package com.example.firstproject.dto;

import com.example.firstproject.entity.Article;
import lombok.*;
@AllArgsConstructor
//@NoArgsConstructor
@ToString
public class CoffeeForm {
    private Long id;
    private String name;
    private String price;

    public Article toEntity() {
        return new Article(id, name, price);
    }
}
