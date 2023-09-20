package study.EndGame.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import study.EndGame.ask.Ask;
import study.EndGame.ask.AskRepository;
import study.EndGame.reply.Reply;
import study.EndGame.reply.ReplyDto;
import study.EndGame.reply.ReplyRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReplyService {
    private final ReplyRepository replyRepository;
    private final AskRepository askRepository;

    public Long save(Long askId, ReplyDto replyDto) {
        Optional<Ask> optionalAsk = askRepository.findById(askId);
        if (optionalAsk.isPresent()) {
            Ask ask = optionalAsk.get();
            Reply reply = Reply.toSave(replyDto, ask);
            return replyRepository.save(reply).getId();
        } else {
            return null;
        }
    }

    public List<ReplyDto> findAll(Long askId) {
        Optional<Ask> optionalAsk = askRepository.findById(askId);
        if (optionalAsk.isPresent()) {
            Ask ask = optionalAsk.get();
            List<Reply> replyList = replyRepository.findAllByAskOrderByIdDesc(ask);

            List<ReplyDto> replyDtoList = new ArrayList<>();
            for (Reply reply : replyList) {
                ReplyDto replyDto = ReplyDto.toReplyDto(reply, askId);
                replyDtoList.add(replyDto);
            }
            return replyDtoList;
        } else {
            return Collections.emptyList();
        }
    }
}
