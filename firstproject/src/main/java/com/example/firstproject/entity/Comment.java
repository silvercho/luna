package com.example.firstproject.entity;

import com.example.firstproject.dto.CommentDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    @Column
    private String nickname;

    @Column
    private String body;

    public static Comment createComment(CommentDto dto, Article article) {
        //예외 발생
        if(dto.getId() !=null)
            throw new IllegalArgumentException("댓글 생성 실패!! 댓글의 ID 가 없어야 합니다. " );
        if(dto.getArticleId() != article.getId())
            throw new IllegalArgumentException("댓글 생성 실패!! 댓글의 ID 가 잘못되었습니다. " );
        //엔티티 생성 및 반환
        return new Comment(
                dto.getId(),
                article,
                dto.getNickname(),
                dto.getBody()
        );
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", article=" + article +
                ", nickname='" + nickname + '\'' +
                ", body='" + body + '\'' +
                '}';
    }

    public void patch(CommentDto dto) {
        // 예외발생
        if (this.id != dto.getId())
            throw new IllegalArgumentException("댓글 수정 실패!! 잘못된 id가 입력되었습니다. ");

        // 객체를 갱신
        if(dto.getNickname() != null)
            this.nickname = dto.getNickname();

        if(dto.getBody() != null)
            this.body = dto.getBody();
    }

    public void delete(CommentDto dto) {
        // 예외발생
        if (this.id != dto.getId())
            throw new IllegalArgumentException("댓글 삭제 실패!! 잘못된 id가 입력되었습니다. ");

        // 객체를 갱신
        if(dto.getNickname() != null)
            this.nickname = dto.getNickname();

        if(dto.getBody() != null)
            this.body = dto.getBody();
    }
}
