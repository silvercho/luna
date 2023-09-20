package study.EndGame.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchCarDto {

    private  Long id;

    private String carBrand;

    private String carName;

    private int carManufacturingDate;

    private int carOdometer;

    private String carFuelType;

    private String imgUrl;

    private Integer price;

    @QueryProjection
    public SearchCarDto(Long id, String carBrand, String carName, int carManufacturingDate, int carOdometer, String carFuelType, String imgUrl, Integer price) {
        this.id = id;
        this.carBrand = carBrand;
        this.carName = carName;
        this.carOdometer = carOdometer;
        this.carManufacturingDate = carManufacturingDate;
        this.carFuelType = carFuelType;
        this.imgUrl = imgUrl;
        this.price = price;
    }
    //Querydsl 과 같은 쿼리 프레임 워크와 함께 사용 - 쿼리에 특화된 프로젝션 생성자를 생성

}