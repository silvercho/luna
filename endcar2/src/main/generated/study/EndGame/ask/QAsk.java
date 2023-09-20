package study.EndGame.ask;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAsk is a Querydsl query type for Ask
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAsk extends EntityPathBase<Ask> {

    private static final long serialVersionUID = 236988830L;

    public static final QAsk ask = new QAsk("ask");

    public final study.EndGame.entity.QBaseEntity _super = new study.EndGame.entity.QBaseEntity(this);

    public final StringPath askContents = createString("askContents");

    public final NumberPath<Integer> askHits = createNumber("askHits", Integer.class);

    public final StringPath askPass = createString("askPass");

    public final StringPath askTitle = createString("askTitle");

    public final StringPath askWriter = createString("askWriter");

    //inherited
    public final StringPath createdBy = _super.createdBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdTime = _super.createdTime;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final StringPath modifiedBy = _super.modifiedBy;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regTime = _super.regTime;

    public final ListPath<study.EndGame.reply.ReplyEntity, study.EndGame.reply.QReplyEntity> replyEntityList = this.<study.EndGame.reply.ReplyEntity, study.EndGame.reply.QReplyEntity>createList("replyEntityList", study.EndGame.reply.ReplyEntity.class, study.EndGame.reply.QReplyEntity.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedTime = _super.updatedTime;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updateTime = _super.updateTime;

    public QAsk(String variable) {
        super(Ask.class, forVariable(variable));
    }

    public QAsk(Path<? extends Ask> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAsk(PathMetadata metadata) {
        super(Ask.class, metadata);
    }

}

