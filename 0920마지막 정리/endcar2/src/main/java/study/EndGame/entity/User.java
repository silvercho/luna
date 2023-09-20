package study.EndGame.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import study.EndGame.constant.UserRole;

import javax.persistence.*;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;


    private String loginId;
    private String password;
    private String name;
    private UserRole role;

    // OAuth 로그인에 사용
    private String provider;
    private String providerId;
}
