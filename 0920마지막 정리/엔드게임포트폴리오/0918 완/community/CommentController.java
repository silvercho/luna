package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import study.EndGame.dto.CommentDto;
import study.EndGame.service.CommentService;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login/community/comment")
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestParam Long postId, @ModelAttribute CommentDto commentDto) {
        if (postId == null) {
            return new ResponseEntity<>("게시글 ID가 필요합니다.", HttpStatus.BAD_REQUEST);
        }

        Long saveResult = commentService.save(postId, commentDto);
        if (saveResult != null) {
            List<CommentDto> commentDtoList = commentService.findAll(postId);
            return new ResponseEntity<>(commentDtoList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("해당 게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
        }
    }
}


