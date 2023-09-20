package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.dto.CommunityDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

// DB의 테이블 역할을 하는 클래스
@Entity
@Getter
@Setter
@Table(name = "community_table")
public class Community extends BaseEntity {
    @Id // pk 컬럼 지정. 필수
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(length = 20, nullable = false) // 크기 20, not null
    private String communityWriter;

    @Column // 크기 255, null 가능
    private String communityPass;

    @Column
    private String communityTitle;

    @Column(length = 500)
    private String communityContents;

    @Column
    private int communityHits;

    @Column
    private int fileAttached; // 1 or 0

    @OneToMany(mappedBy = "community", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<FileEntity> fileEntityList = new ArrayList<>();

    @OneToMany(mappedBy = "community", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<CommentEntity> commentEntityList = new ArrayList<>();

    public static Community toSaveEntity(CommunityDto communityDto) {
        Community community = new Community();
        community.setCommunityWriter(communityDto.getCommunityWriter());
        community.setCommunityPass(communityDto.getCommunityPass());
        community.setCommunityTitle(communityDto.getCommunityTitle());
        community.setCommunityContents(communityDto.getCommunityContents());
        community.setCommunityHits(0);
        community.setFileAttached(0); // 파일 없음.
        return community;
    }

    public static Community toUpdateEntity(CommunityDto communityDto) {
        Community community = new Community();
        community.setId(communityDto.getId());
        community.setCommunityWriter(communityDto.getCommunityWriter());
        community.setCommunityPass(communityDto.getCommunityPass());
        community.setCommunityTitle(communityDto.getCommunityTitle());
        community.setCommunityContents(communityDto.getCommunityContents());
        community.setCommunityHits(communityDto.getCommunityHits());
        return community;
    }

    public static Community toSaveFileEntity(CommunityDto communityDto) {
        Community community = new Community();
        community.setCommunityWriter(communityDto.getCommunityWriter());
        community.setCommunityPass(communityDto.getCommunityPass());
        community.setCommunityTitle(communityDto.getCommunityTitle());
        community.setCommunityContents(communityDto.getCommunityContents());
        community.setCommunityHits(0);
        community.setFileAttached(1); // 파일 있음.
        return community;
    }
}