package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.dto.CommentDto;
import study.EndGame.dto.ReplyDto;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "reply_table")
public class ReplyEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20, nullable = false)
    private String replyWriter;

    @Column
    private String replyContents;

    /* Board:Comment = 1:N */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ask_id")
    private Ask ask;


    public static ReplyEntity toSaveEntity(ReplyDto replyDto, Ask ask) {
        ReplyEntity replyEntity = new ReplyEntity();
        replyEntity.setReplyWriter(replyDto.getReplyWriter());
        replyEntity.setReplyContents(replyDto.getReplyContents());
        replyEntity.setAsk(ask);
        return replyEntity;
    }
}