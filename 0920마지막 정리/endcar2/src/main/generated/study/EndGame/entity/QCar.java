package study.EndGame.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCar is a Querydsl query type for Car
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCar extends EntityPathBase<Car> {

    private static final long serialVersionUID = -338304849L;

    public static final QCar car = new QCar("car");

    public final QBaseTimeEntity _super = new QBaseTimeEntity(this);

    public final StringPath carAccidentHistory = createString("carAccidentHistory");

    public final StringPath carBrand = createString("carBrand");

    public final StringPath carColor = createString("carColor");

    public final StringPath carFuelType = createString("carFuelType");

    public final ListPath<CarImg, QCarImg> carImages = this.<CarImg, QCarImg>createList("carImages", CarImg.class, QCarImg.class, PathInits.DIRECT2);

    public final NumberPath<Integer> carManufacturingDate = createNumber("carManufacturingDate", Integer.class);

    public final StringPath carName = createString("carName");

    public final StringPath carNumber = createString("carNumber");

    public final NumberPath<Integer> carOdometer = createNumber("carOdometer", Integer.class);

    public final StringPath carOpinion = createString("carOpinion");

    public final StringPath carOption = createString("carOption");

    public final NumberPath<Integer> carPrice = createNumber("carPrice", Integer.class);

    public final EnumPath<study.EndGame.constant.CarSellStatus> carSellStatus = createEnum("carSellStatus", study.EndGame.constant.CarSellStatus.class);

    public final NumberPath<Integer> carStockNumber = createNumber("carStockNumber", Integer.class);

    public final StringPath carTransmission = createString("carTransmission");

    public final StringPath carType = createString("carType");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath ownerName = createString("ownerName");

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regTime = _super.regTime;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateTime = _super.updateTime;

    public QCar(String variable) {
        super(Car.class, forVariable(variable));
    }

    public QCar(Path<? extends Car> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCar(PathMetadata metadata) {
        super(Car.class, metadata);
    }

}

