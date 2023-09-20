package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.community.Community;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class FileEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String originalFileName;

    @Column
    private String storedFileName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id", insertable=false, updatable=false)
    private Community community;

    public static FileEntity toFileEntity(Community community, String originalFileName, String storedFileName) {
        FileEntity fileEntity = new FileEntity();
        fileEntity.setOriginalFileName(originalFileName);
        fileEntity.setStoredFileName(storedFileName);
        fileEntity.setCommunity(community);
        return fileEntity;
    }
}