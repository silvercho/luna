package study.EndGame.ask;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AskRepository extends JpaRepository<Ask, Long> {
    @Modifying
    @Query(value = "update Ask a set a.askHits=a.askHits+1 where a.id=:id")
    void updateHits(@Param("id") Long id);
}
