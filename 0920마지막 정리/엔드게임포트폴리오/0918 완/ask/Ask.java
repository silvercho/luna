package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.dto.AskDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

// DB의 테이블 역할을 하는 클래스
@Entity
@Getter
@Setter
@Table(name = "ask_table")
public class Ask extends BaseEntity {
    @Id // pk 컬럼 지정. 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(length = 20, nullable = false) // 크기 20, not null
    private String askWriter;

    @Column // 크기 255, null 가능
    private String askPass;

    @Column
    private String askTitle;

    @Column(length = 500)
    private String askContents;

    @Column
    private int askHits;

//
//    @OneToMany(mappedBy = "ask", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
//    private List<FileEntity> fileEntityList = new ArrayList<>();

    @OneToMany(mappedBy = "ask", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ReplyEntity> replyEntityList = new ArrayList<>();

    public static Ask toSaveEntity(AskDto askDto) {
        Ask ask = new Ask();
        ask.setAskWriter(askDto.getAskWriter());
        ask.setAskPass(askDto.getAskPass());
        ask.setAskTitle(askDto.getAskTitle());
        ask.setAskContents(askDto.getAskContents());
        ask.setAskHits(0);
        return ask;
    }

    public static Ask toUpdateEntity(AskDto askDto) {
        Ask ask = new Ask();
        ask.setId(askDto.getId());
        ask.setAskWriter(askDto.getAskWriter());
        ask.setAskPass(askDto.getAskPass());
        ask.setAskTitle(askDto.getAskTitle());
        ask.setAskContents(askDto.getAskContents());
        ask.setAskHits(askDto.getAskHits());
        return ask;
    }

//    public static Ask toSaveFileEntity(AskDto askDto) {
//        Ask ask = new Ask();
//        ask.setAskWriter(askDto.getAskWriter());
//        ask.setAskPass(askDto.getAskPass());
//        ask.setAskTitle(askDto.getAskTitle());
//        ask.setAskContents(askDto.getAskContents());
//        ask.setAskHits(0);
//        ask.setFileAttached(1); // 파일 있음.
//        return ask;
//    }
}