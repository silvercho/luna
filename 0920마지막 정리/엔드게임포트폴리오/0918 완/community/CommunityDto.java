package study.EndGame.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;
import study.EndGame.entity.Community;

import java.time.LocalDateTime;

// DTO(Data Transfer Object), VO, Bean,         Entity
@Getter
@Setter
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class CommunityDto {
    private Long id;
    private String communityWriter;
    private String communityPass;
    private String communityTitle;
    private String communityContents;
    private int communityHits;
    private LocalDateTime communityCreatedTime;
    private LocalDateTime communityUpdatedTime;

    private MultipartFile communityFile; // save.html -> Controller 파일 담는 용도
    private String originalFileName; // 원본 파일 이름
    private String storedFileName; // 서버 저장용 파일 이름
    private int fileAttached; // 파일 첨부 여부(첨부 1, 미첨부 0)

    public CommunityDto(Long id, String communityWriter, String communityTitle, int communityHits, LocalDateTime communityCreatedTime) {
        this.id = id;
        this.communityWriter = communityWriter;
        this.communityTitle = communityTitle;
        this.communityHits = communityHits;
        this.communityCreatedTime = communityCreatedTime;
    }

    public static CommunityDto toCommunityDto(Community community) {
        CommunityDto communityDto = new CommunityDto();
        communityDto.setId(community.getId());
        communityDto.setCommunityWriter(community.getCommunityWriter());
        communityDto.setCommunityPass(community.getCommunityPass());
        communityDto.setCommunityTitle(community.getCommunityTitle());
        communityDto.setCommunityContents(community.getCommunityContents());
        communityDto.setCommunityHits(community.getCommunityHits());
        communityDto.setCommunityCreatedTime(community.getCreatedTime());
        communityDto.setCommunityUpdatedTime(community.getUpdatedTime());
        if (community.getFileAttached() == 0) {
            communityDto.setFileAttached(community.getFileAttached()); // 0
        } else {
            communityDto.setFileAttached(community.getFileAttached()); // 1
            // 파일 이름을 가져가야 함.
            // orginalFileName, storedFileName : board_file_table(BoardFileEntity)
            // join
            // select * from board_table b, board_file_table bf where b.id=bf.board_id
            // and where b.id=?
            communityDto.setOriginalFileName(community.getFileEntityList().get(0).getOriginalFileName());
            communityDto.setStoredFileName(community.getFileEntityList().get(0).getStoredFileName());
        }

        return communityDto;
    }
}
