package study.EndGame.reply;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.ask.Ask;
import study.EndGame.entity.BaseEntity;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Reply extends BaseEntity {
    @Id
    @Column(name = "reply_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ask_id", insertable=false, updatable=false)
    private Ask ask;

    @Column(length = 20, nullable = false)
    private String replyWriter;

    @Column
    private String replyContents;

    public static Reply toSave(ReplyDto replyDto, Ask ask) {
        Reply reply = new Reply();
        reply.setReplyWriter(replyDto.getReplyWriter());
        reply.setReplyContents(replyDto.getReplyContents());
        reply.setAsk(ask);
        return reply;
    }
}