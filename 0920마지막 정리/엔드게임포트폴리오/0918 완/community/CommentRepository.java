package study.EndGame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import study.EndGame.entity.CommentEntity;
import study.EndGame.entity.Community;

import java.util.List;


public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
    // select * from comment_table where board_id=? order by id desc;
    List<CommentEntity> findAllByCommunityOrderByIdDesc(Community community);
}