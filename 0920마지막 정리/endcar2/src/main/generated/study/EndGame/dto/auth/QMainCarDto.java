package study.EndGame.dto.auth;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.ConstructorExpression;
import javax.annotation.processing.Generated;

/**
 * study.EndGame.dto.auth.QMainCarDto is a Querydsl Projection type for MainCarDto
 */
@Generated("com.querydsl.codegen.DefaultProjectionSerializer")
public class QMainCarDto extends ConstructorExpression<MainCarDto> {

    private static final long serialVersionUID = 947321813L;

    public QMainCarDto(com.querydsl.core.types.Expression<Long> id, com.querydsl.core.types.Expression<String> itemNm, com.querydsl.core.types.Expression<String> itemDetail, com.querydsl.core.types.Expression<String> imgUrl, com.querydsl.core.types.Expression<Integer> price) {
        super(MainCarDto.class, new Class<?>[]{long.class, String.class, String.class, String.class, int.class}, id, itemNm, itemDetail, imgUrl, price);
    }

}

