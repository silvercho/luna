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

    public static ReplyDto toReplyDto(Reply reply, Long askId) {
        ReplyDto replyDto = new ReplyDto();
        replyDto.setId(reply.getId());
        replyDto.setReplyWriter(reply.getReplyWriter());
        replyDto.setReplyContents(reply.getReplyContents());
        replyDto.setReplyCreatedTime(reply.getCreatedTime());
        replyDto.setAskId(askId);
        return replyDto;
    }
}
