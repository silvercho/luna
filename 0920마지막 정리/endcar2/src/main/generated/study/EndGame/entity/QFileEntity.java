package study.EndGame.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QFileEntity is a Querydsl query type for FileEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFileEntity extends EntityPathBase<FileEntity> {

    private static final long serialVersionUID = 2135735108L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QFileEntity fileEntity = new QFileEntity("fileEntity");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final study.EndGame.community.QCommunity community;

    //inherited
    public final StringPath createdBy = _super.createdBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdTime = _super.createdTime;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final StringPath modifiedBy = _super.modifiedBy;

    public final StringPath originalFileName = createString("originalFileName");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regTime = _super.regTime;

    public final StringPath storedFileName = createString("storedFileName");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedTime = _super.updatedTime;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateTime = _super.updateTime;

    public QFileEntity(String variable) {
        this(FileEntity.class, forVariable(variable), INITS);
    }

    public QFileEntity(Path<? extends FileEntity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QFileEntity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QFileEntity(PathMetadata metadata, PathInits inits) {
        this(FileEntity.class, metadata, inits);
    }

    public QFileEntity(Class<? extends FileEntity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.community = inits.isInitialized("community") ? new study.EndGame.community.QCommunity(forProperty("community")) : null;
    }

}

