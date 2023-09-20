package study.EndGame.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import study.EndGame.dto.CarSearchDto;
import study.EndGame.entity.Car;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long>,
        QuerydslPredicateExecutor<Car>, CarRepositoryCustom {

    List<Car> findByCarName(String carName);
    List<Car> findByCarNameOrCarOption(String carName, String carOption);

    List<Car> findByPriceLessThan(Integer price);
    List<Car> findByPriceLessThanOrderByPriceDesc(Integer price);

    @Query("select c from Car c where c.carOption like %:carOption% order by c.price desc" )
    List<Car> findByCarOption(@Param("carOption") String carOption);

    @Query(value = "select * from car c where c.car_option like %:carOption% order by c.price desc", nativeQuery = true)
    List<Car> findByCarOptionByNative(@Param("carOption") String carOption);
}