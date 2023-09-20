package study.EndGame.dto.auth;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MainCarDto {

    private  Long id;

    private String carNm;

    private String carDetail;

    private String imgUrl;

    private Integer price;


    @QueryProjection
    public MainCarDto(Long id, String itemNm, String itemDetail, String imgUrl, Integer price) {
        this.id = id;
        this.carNm = itemNm;
        this.carDetail = itemDetail;
        this.imgUrl = imgUrl;
        this.price = price;
    }
    //Querydsl 과 같은 쿼리 프레임 워크와 함께 사용 - 쿼리에 특화된 프로젝션 생성자를 생성

}