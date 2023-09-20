package study.EndGame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import study.EndGame.entity.FileEntity;

public interface FileRepository extends JpaRepository<FileEntity,Long> {
}
