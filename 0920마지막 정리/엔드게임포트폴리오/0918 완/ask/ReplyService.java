package study.EndGame.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import study.EndGame.dto.ReplyDto;
import study.EndGame.entity.Ask;
import study.EndGame.entity.ReplyEntity;
import study.EndGame.repository.AskRepository;;
import study.EndGame.repository.ReplyRepository;

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
            ReplyEntity replyEntity = ReplyEntity.toSaveEntity(replyDto, ask);
            return replyRepository.save(replyEntity).getId();
        } else {
            return null;
        }
    }

    public List<ReplyDto> findAll(Long askId) {
        Optional<Ask> optionalAsk = askRepository.findById(askId);
        if (optionalAsk.isPresent()) {
            Ask ask = optionalAsk.get();
            List<ReplyEntity> replyEntityList = replyRepository.findAllByAskOrderByIdDesc(ask);

            List<ReplyDto> replyDtoList = new ArrayList<>();
            for (ReplyEntity replyEntity : replyEntityList) {
                ReplyDto replyDto = ReplyDto.toReplyDto(replyEntity, askId);
                replyDtoList.add(replyDto);
            }
            return replyDtoList;
        } else {
            return Collections.emptyList();
        }
    }
}
