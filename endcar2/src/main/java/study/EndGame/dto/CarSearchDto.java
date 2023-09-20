package study.EndGame.dto;

import lombok.Getter;
import lombok.Setter;
import study.EndGame.constant.CarSellStatus;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CarSearchDto {

    private String searchDateType;

    private CarSellStatus searchSellStatus;

    private String searchBy;

    private String searchQuery = "";

}