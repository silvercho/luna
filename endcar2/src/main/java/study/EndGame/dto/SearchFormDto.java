package study.EndGame.dto;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.constant.CarSellStatus;

import javax.persistence.Column;
import javax.persistence.Lob;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SearchFormDto {

    private Long carId;
    private String carBrand;
    private String carName;
    private String carType;
    private String carColor;
    private int carManufacturingDate;
    private int carPrice;
    private String carOption;

}