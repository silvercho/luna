package study.EndGame.community;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.entity.BaseEntity;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Community extends BaseEntity {
    @Id
    @Column(name = "community_id")
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