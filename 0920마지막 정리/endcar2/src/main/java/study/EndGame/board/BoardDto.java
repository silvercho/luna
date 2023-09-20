package study.EndGame.board;

   // Board Entity를 가져옴
import lombok.*;
import study.EndGame.entity.User;
import study.EndGame.repository.UserRepository;
import study.EndGame.service.UserService;

import java.time.LocalDateTime;

// DTO : 데이터 전달 목적
// 데이터를 캡슐화한 데이터 전달 객체




@Getter
@Setter
@ToString   // 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 메서드
@NoArgsConstructor  // 인자 없이 객체 생성 가능

public class BoardDto {
    private Long id;
    private String writer;
    private String title;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    private User user;

    private UserRepository userRepository;
    private UserService userService;

    public Board toEntity(){
        Board board = Board.builder()
                .id(id)
                .writer(writer)
                .title(title)
                .content(content)
                .build();
        return board;
    }

    //
    @Builder
    public BoardDto(Long id, String title, String content, String writer, LocalDateTime createdDate, LocalDateTime modifiedDate, User user) {
        this.id = id;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}