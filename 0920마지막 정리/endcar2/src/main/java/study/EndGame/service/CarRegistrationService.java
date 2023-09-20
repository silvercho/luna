package study.EndGame.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import study.EndGame.entity.Car;
import study.EndGame.repository.CarRepository;


@Service
public class CarRegistrationService {

    private final CarRepository carRepository;

    @Autowired
    public CarRegistrationService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public void registerCar(Car car) {
        carRepository.save(car);
    }


}