package study.EndGame.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "차량명을 입력해주세요.")
    private String carName;

    @NotBlank(message = "차종을 입력해주세요.")
    private String carType;

    @NotBlank(message = "색깔을 입력해주세요.")
    private String carColor;

    @NotNull(message = "가격을 입력해주세요.")
    private int carPrice;


}
