package study.EndGame.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import study.EndGame.entity.Car;
import study.EndGame.repository.CarRepository;

import java.util.List;

@Service
public class CarSearchService {
    private final CarRepository carRepository;

    @Autowired // 주입을 위한 어노테이션 추가
    public CarSearchService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

}
