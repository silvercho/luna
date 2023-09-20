package study.EndGame.comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class CommentDto {
    private Long id;
    private String commentWriter;
    private String commentContents;
    private Long communityId;
    private LocalDateTime commentCreatedTime;

    public static CommentDto toCommentDto(Comment comment, Long communityId) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setCommentWriter(comment.getCommentWriter());
        commentDto.setCommentContents(comment.getCommentContents());
        commentDto.setCommentCreatedTime(comment.getCreatedTime());
        commentDto.setCommunityId(communityId);
        return commentDto;
    }
}
