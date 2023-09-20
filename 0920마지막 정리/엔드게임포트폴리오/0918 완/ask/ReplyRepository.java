package study.EndGame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import study.EndGame.entity.Ask;
import study.EndGame.entity.ReplyEntity;

import java.util.List;


public interface ReplyRepository extends JpaRepository<ReplyEntity, Long> {
    // select * from reply_table where board_id=? order by id desc;
    List<ReplyEntity> findAllByAskOrderByIdDesc(Ask ask);
}