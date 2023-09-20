package study.EndGame.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCarImg is a Querydsl query type for CarImg
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCarImg extends EntityPathBase<CarImg> {

    private static final long serialVersionUID = 1848560788L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCarImg carImg = new QCarImg("carImg");

    public final QCar car;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imgName = createString("imgName");

    public final StringPath imgUrl = createString("imgUrl");

    public final StringPath oriImgName = createString("oriImgName");

    public final StringPath repImgYn = createString("repImgYn");

    public QCarImg(String variable) {
        this(CarImg.class, forVariable(variable), INITS);
    }

    public QCarImg(Path<? extends CarImg> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCarImg(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCarImg(PathMetadata metadata, PathInits inits) {
        this(CarImg.class, metadata, inits);
    }

    public QCarImg(Class<? extends CarImg> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.car = inits.isInitialized("car") ? new QCar(forProperty("car")) : null;
    }

}

