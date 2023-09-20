package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.dto.CommentDto;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "comment_table")
public class CommentEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20, nullable = false)
    private String commentWriter;

    @Column
    private String commentContents;

    /* Board:Comment = 1:N */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id")
    private Community community;


    public static CommentEntity toSaveEntity(CommentDto commentDto, Community community) {
        CommentEntity commentEntity = new CommentEntity();
        commentEntity.setCommentWriter(commentDto.getCommentWriter());
        commentEntity.setCommentContents(commentDto.getCommentContents());
        commentEntity.setCommunity(community);
        return commentEntity;
    }
}