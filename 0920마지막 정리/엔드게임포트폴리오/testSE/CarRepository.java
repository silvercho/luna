package study.EndGame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import study.EndGame.entity.Car;

public interface CarRepository extends JpaRepository<Car, Long> {



}
