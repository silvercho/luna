package study.EndGame.repository;

import lombok.Getter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import study.EndGame.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    boolean existsByLoginId(String loginId);
    boolean existsByName(String name);
    Optional<User> findByLoginId(String loginId);

}
