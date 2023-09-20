package study.EndGame;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import study.EndGame.constant.UserRole;
import study.EndGame.entity.User;
import study.EndGame.repository.UserRepository;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class MakeInitData {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    @PostConstruct
    public void makeAdminAndUser() {
        User admin1 = User.builder()
                .loginId("admin1")
                .password("1234")
                .name("관리자1")
                .role(UserRole.ADMIN)
                .build();
        userRepository.save(admin1);

        User user1 = User.builder()
                .loginId("user1")
                .password("1234")
                .name("User1")
                .role(UserRole.USER)
                .build();
        userRepository.save(user1);

        User admin2 = User.builder()
                .loginId("admin2")
                .password(encoder.encode("1234"))
                .name("관리자")
                .role(UserRole.ADMIN)
                .build();
        userRepository.save(admin2);

        User user2 = User.builder()
                .loginId("user")
                .password(encoder.encode("1234"))
                .name("유저1")
                .role(UserRole.USER)
                .build();
        userRepository.save(user2);
    }
}
