package study.EndGame.community;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    @Modifying
    @Query(value = "update Community c set c.communityHits=c.communityHits+1 where c.id=:id")
    void updateHits(@Param("id") Long id);
}
