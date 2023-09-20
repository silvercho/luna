package study.EndGame.repository;

import study.EndGame.entity.CarImg;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarImgRepository extends JpaRepository<CarImg, Long> {
    List<CarImg> findByCarIdOrderByIdAsc(Long carId);

    CarImg findByCarIdAndRepImgYn(Long carId, String repImgYn);

}
