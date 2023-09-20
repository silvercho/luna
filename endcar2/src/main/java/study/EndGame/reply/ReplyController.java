package study.EndGame.reply;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login/ask/reply")
public class ReplyController {
    private final ReplyService replyService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestParam Long postId, @ModelAttribute ReplyDto replyDto) {
        if (postId == null) {
            return new ResponseEntity<>("게시글 ID가 필요합니다.", HttpStatus.BAD_REQUEST);
        }

        Long saveResult = replyService.save(postId, replyDto);
        if (saveResult != null) {
            List<ReplyDto> replyDtoList = replyService.findAll(postId);
            return new ResponseEntity<>(replyDtoList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("해당 게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
        }
    }
}


