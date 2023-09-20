package study.EndGame.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import study.EndGame.entity.CommentEntity;

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

    public static CommentDto toCommentDto(CommentEntity commentEntity, Long communityId) {
        CommentDto commentDto = new CommentDto();
        commentDto.setId(commentEntity.getId());
        commentDto.setCommentWriter(commentEntity.getCommentWriter());
        commentDto.setCommentContents(commentEntity.getCommentContents());
        commentDto.setCommentCreatedTime(commentEntity.getCreatedTime());
        commentDto.setCommunityId(communityId);
        return commentDto;
    }
}
