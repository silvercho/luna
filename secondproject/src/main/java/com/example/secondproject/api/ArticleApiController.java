package com.example.secondproject.api;

import com.example.secondproject.dto.ArticleForm;
import com.example.secondproject.entity.Article;
import com.example.secondproject.repository.ArticleRepository;
import com.example.secondproject.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ArticleApiController {

    @Autowired
    private ArticleService articleService;


    //get
    @GetMapping("api/articles")
    public List<Article> index(){
        return articleService.index();
    }
    @GetMapping("/api/articles/{id}")
    public Article show(@PathVariable Long id){
        return articleService.show(id);
    }

    @PostMapping("/api/articles")
    public ResponseEntity<Article> create(@RequestBody ArticleForm dto){
        Article created = articleService.create(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    @PatchMapping("/api/articles/{id}")
    public ResponseEntity<Article> update(@PathVariable Long id,
                                          @RequestBody ArticleForm dto) {
        Article updated = articleService.update(id, dto);
        return (updated != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updated) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //DELETE
    @DeleteMapping("/api/articles/{id}")
    public ResponseEntity<Article> deleted(@PathVariable Long id){
        Article deleted = articleService.delete(id);
        return (deleted != null) ?
                ResponseEntity.status(HttpStatus.NO_CONTENT).build() :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //ResponseEntity.status(HttpStatus.NO_CONTENT) 204 NO_content 를 가진 응답 반환
    // 요청이 성공적으로 처리 되었음을 알린다. 또한 응답 본문에는 데이터가 반환되지 않는다.

    @PostMapping("/api/transaction-test")
    public ResponseEntity<List<Article>> transaction(@RequestBody List<ArticleForm> dtos){
        //Article 을 리스트(묶음) 단위 전송, ResponseEntity 로 감싸서 받음
        List<Article> createList = articleService.createArticle(dtos);
        return (createList != null) ?
                ResponseEntity.status(HttpStatus.OK).body(createList) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }



}