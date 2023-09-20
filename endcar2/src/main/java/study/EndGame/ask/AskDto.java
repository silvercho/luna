package study.EndGame.ask;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

// DTO(Data Transfer Object), VO, Bean, Entity
@Getter
@Setter
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class AskDto {
    private Long id;
    private String askWriter;
    private String askPass;
    private String askTitle;
    private String askContents;
    private int askHits;
    private LocalDateTime askCreatedTime;
    private LocalDateTime askUpdatedTime;

    private MultipartFile askFile; // save.html -> Controller 파일 담는 용도
    private String originalFileName; // 원본 파일 이름
    private String storedFileName; // 서버 저장용 파일 이름
    private int fileAttached; // 파일 첨부 여부(첨부 1, 미첨부 0)

    public AskDto(Long id, String askWriter, String askTitle, int askHits, LocalDateTime askCreatedTime) {
        this.id = id;
        this.askWriter = askWriter;
        this.askTitle = askTitle;
        this.askHits = askHits;
        this.askCreatedTime = askCreatedTime;
    }

    public static AskDto toAskDto(Ask ask) {
        AskDto askDto = new AskDto();
        askDto.setId(ask.getId());
        askDto.setAskWriter(ask.getAskWriter());
        askDto.setAskPass(ask.getAskPass());
        askDto.setAskTitle(ask.getAskTitle());
        askDto.setAskContents(ask.getAskContents());
        askDto.setAskHits(ask.getAskHits());
        askDto.setAskCreatedTime(ask.getCreatedTime());
        askDto.setAskUpdatedTime(ask.getUpdatedTime());

        return askDto;
    }
}
