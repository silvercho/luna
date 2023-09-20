package study.EndGame.comment;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.community.Community;
import study.EndGame.entity.BaseEntity;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class Comment extends BaseEntity {
    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20, nullable = false)
    private String commentWriter;

    @Column
    private String commentContents;
    // Comment 엔터티와 Community 엔터티 간의 관계 설정

    @ManyToOne
    @JoinColumn(name = "community_id") // community_id는 연관된 컬럼명
    private Community community;

    public static Comment toSave(CommentDto commentDto, Community community) {
        Comment comment = new Comment();
        comment.setCommentWriter(commentDto.getCommentWriter());
        comment.setCommentContents(commentDto.getCommentContents());
        comment.setCommunity(community); // 커뮤니티 속성 설정

        return comment;
    }
}