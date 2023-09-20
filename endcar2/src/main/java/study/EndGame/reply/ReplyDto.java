package study.EndGame.reply;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ReplyDto {
    private Long id;
    private String replyWriter;
    private String replyContents;
    private Long askId;
    private LocalDateTime replyCreatedTime;

    public static ReplyDto toReplyDto(ReplyEntity replyEntity, Long askId) {
        ReplyDto replyDto = new ReplyDto();
        replyDto.setId(replyEntity.getId());
        replyDto.setReplyWriter(replyEntity.getReplyWriter());
        replyDto.setReplyContents(replyEntity.getReplyContents());
        replyDto.setReplyCreatedTime(replyEntity.getCreatedTime());
        replyDto.setAskId(askId);
        return replyDto;
    }
}
