package study.EndGame.dto;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.ConstructorExpression;
import javax.annotation.processing.Generated;

/**
 * study.EndGame.dto.QSearchCarDto is a Querydsl Projection type for SearchCarDto
 */
@Generated("com.querydsl.codegen.DefaultProjectionSerializer")
public class QSearchCarDto extends ConstructorExpression<SearchCarDto> {

    private static final long serialVersionUID = -412240376L;

    public QSearchCarDto(com.querydsl.core.types.Expression<Long> id, com.querydsl.core.types.Expression<String> carBrand, com.querydsl.core.types.Expression<String> carName, com.querydsl.core.types.Expression<Integer> carManufacturingDate, com.querydsl.core.types.Expression<Integer> carOdometer, com.querydsl.core.types.Expression<String> carFuelType, com.querydsl.core.types.Expression<String> imgUrl, com.querydsl.core.types.Expression<Integer> price) {
        super(SearchCarDto.class, new Class<?>[]{long.class, String.class, String.class, int.class, int.class, String.class, String.class, int.class}, id, carBrand, carName, carManufacturingDate, carOdometer, carFuelType, imgUrl, price);
    }

}

