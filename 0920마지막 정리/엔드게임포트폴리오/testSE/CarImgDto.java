package study.EndGame.dto;

import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import study.EndGame.entity.CarImg;

public class CarImgDto {
    @Getter
    @Setter
        private Long id;
        private String imgName;
        private String oriImgName;
        private String imgUrl;
        private String repImgYn;
        private static ModelMapper modelMapper = new ModelMapper();

        public static CarImgDto of(CarImg carImg) {
            return modelMapper.map(carImg, CarImgDto.class);
        }
}
