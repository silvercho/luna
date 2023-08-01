package com.example.secondproject.controller;

import com.example.secondproject.dto.ArticleForm;

import com.example.secondproject.entity.Article;
import com.example.secondproject.repository.ArticleRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@Controller
@Slf4j //로깅을 위한 롬복 어노테이션
public class ArticleController {

//    private final ArticleRepository articleRepository;
//    @Autowired
//    public ArticleController(ArticleRepository articleRepository) {
//        this.articleRepository = articleRepository;
//    }


    @Autowired
    private ArticleRepository articleRepository;
    // 스프링 부트가 미리 생성해놓은 리파지터리 객체를 가져옴(DI)


    @GetMapping("articles/new")
    public  String newArticleForm(){
        return  "articles/new";
    }

    @PostMapping("articles/create")
    public  String createArticleForm(ArticleForm form){
        // System.out.println(form.toString()); -> println() 을 로깅으로 대체
        log.info(form.toString());
        //1. Dto 를 Entity 변환
        Article article = form.toEntity();
        // System.out.println(article.toString());
        log.info(article.toString()); // println() 을 로깅으로 대체!

        // 2. Repository 에게 Entity를 DB로 저장
        Article saved = articleRepository.save(article);
        //System.out.println(saved.toString());
        log.info(saved.toString());   // println() 을 로깅으로 대체!

        return "redirect:/articles/" + saved.getId();
        // 새로운  url로 다시  요청을 보내게됨
    }
    //  @PostMapping("articles/create") 다음 경로 요청이 들오면 밑에 있는 메소드로 처리
    //public  String createArticleForm(ArticleForm form)
    // ArticleForm 클래스 타입의 객체를 파라미터로 받습니다.
    // System.out.println(form.toString()); ArticleForm 객체의 내용을 콘솔에 출력

    @GetMapping("/articles/{id}")
    public String show(@PathVariable Long id, Model model){
        //url에서 id를 변수로 가져옴
        log.info("id= " + id);
        // 1 : id로 데이터를 가져옴 !
        // Optional<Article> optionalArticle = articleRepository.findById(id);
        // Article articleEntity = optionalArticle.orElse(null);

        Article articleEntity = articleRepository.findById(id).orElse(null);

        //findById() 메서드는    Optional<T>을 반환하므로
        // 우리는 결과를 받을  Optional<Article> 변수를 선언
        // orElse() 메서드를 사용하여 Optional 객체 안의 값이 존재하면 해당 값을 반환
        //값이 없으면 null 값을 가지게 됩니다.



        // 2 :가져온 데이터를 모델에 등록
        model.addAttribute("article", articleEntity);

        // 3 : 보여줄 페이지를 설정 !

        return "articles/show";
    }

    @GetMapping("/articles")
    public String index(Model model){
        //1 : 모든 Article 을 가져온다.
        List<Article> articleEntityList = articleRepository.findAll();

        //2 : 가져온 Article 을 묶음을 뷰로 전달!
        model.addAttribute("articleList", articleEntityList);

        //3 : 뷰페이지를 설정

        return "articles/index";
    }

    @GetMapping("/articles/{id}/edit")
    public String edit(@PathVariable Long id, Model model){
        //수정할 데이터 가져오기
        Article articleEntity = articleRepository.findById(id).orElse(null);
        //모델 데이터 등록
        model.addAttribute("article", articleEntity);
        // 뷰페이지 설정
        return "articles/edit";
    }
    @PostMapping("/articles/update")
    public String update(ArticleForm form){
        log.info(form.toString());
        // 1. dto 를 엔티티로 변환
        Article articleEntity = form.toEntity();
        log.info(articleEntity.toString());

        // 2. 엔티티를 DB 를 저장
        // 2-1 : DB 에서 기존 데이터를 가져옴
        Article target = articleRepository.findById(articleEntity.getId()).orElse(null);

        // 2-2 : 기존 데이터가 있다면, 값을 갱신
        if(target != null) {
            articleRepository.save(articleEntity);
        }

        // 3. 수정 결과 페이지로 리다이렉트

        return "redirect:/articles/" + articleEntity.getId();
    }

    @GetMapping("/articles/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes rttr){
        //리다이렉트후 다른 컨트롤러나 뷰로 데이터를 전달할때 쓰임
        log.info("삭제 요청이 들어왔습니다!!");
        //삭제 대상을 가져옴
        Article target = articleRepository.findById(id).orElse(null);
        log.info(target.toString());

        //대상을 삭제
        if(target != null){
            articleRepository.delete(target);
            rttr.addFlashAttribute("msg", "삭제가 완료되었습니다.");
        }

        //결과 페이지로 리다이렉트
        return "redirect:/articles";
    }
}