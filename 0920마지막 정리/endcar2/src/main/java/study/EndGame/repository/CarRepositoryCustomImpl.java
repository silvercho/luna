package study.EndGame.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Wildcard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.thymeleaf.util.StringUtils;
import study.EndGame.constant.CarSellStatus;
import study.EndGame.dto.CarSearchDto;
import study.EndGame.dto.QSearchCarDto;
import study.EndGame.dto.SearchCarDto;
import study.EndGame.entity.Car;
import study.EndGame.entity.QCar;
import study.EndGame.entity.QCarImg;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.List;

public class CarRepositoryCustomImpl implements CarRepositoryCustom {


    //Impl- implements 약어로 구현을 나타내는 용어
    //프로그래밍에서 Impl 은 인터페이스나 추상 클래스의 실제 구현체를 나타내는 클래스
    private JPAQueryFactory queryFactory;

    public CarRepositoryCustomImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);

    }

    private BooleanExpression searchSellStatusEq(CarSellStatus searchSellStatus) {
        return searchSellStatus == null ? null : QCar.car.carSellStatus.eq(searchSellStatus);
    }
    // 판매상태를 검색하는 조건을 생성  searchSellStatus 가 주어진 경우 해당 판매 상태와 일치하는 조건 생성
    // 아니면 null 반환


    private BooleanExpression regDtsAfter(String searchDateType) {

        LocalDateTime dateTime = LocalDateTime.now();

        if (StringUtils.equals("all", searchDateType) || searchDateType == null) {
            return null;

        } else if (StringUtils.equals("1d", searchDateType)) {
            dateTime = dateTime.minusDays(1);
        } else if (StringUtils.equals("1w", searchDateType)) {
            dateTime = dateTime.minusWeeks(1);
        } else if (StringUtils.equals("1m", searchDateType)) {
            dateTime = dateTime.minusMonths(1);
        } else if (StringUtils.equals("6m", searchDateType)) {
            dateTime = dateTime.minusMonths(6);
        }
        return QCar.car.regTime.after(dateTime);
    }


    private BooleanExpression searchByLike(String searchBy, String searchQuery){

        if(StringUtils.equals("carName", searchBy)){ //상품명을 검색하는 조건
            return QCar.car.carName.like("%" + searchQuery + "%");
//        } else if (StringUtils.equals("createdBy", searchBy)) { //작성자 검색조건
//            return QCar.car.createdBy.like("%" + searchQuery + "%");
        }

        return null;
    }

    @Override
    public Page<Car> getAdminCarPage(CarSearchDto carSearchDto, Pageable pageable){
        List<Car> content = queryFactory
                .selectFrom(QCar.car) //item 엔티티 데이터를 선택
                .where(regDtsAfter(carSearchDto.getSearchDateType()),
                        searchSellStatusEq(carSearchDto.getSearchSellStatus()),
                        searchByLike(carSearchDto.getSearchBy(),
                                carSearchDto.getSearchQuery()))
                .orderBy(QCar.car.id.desc())//아이템 id의 역순 정렬
                .offset(pageable.getOffset()) //페이지의 시작 오페셋을 설정
                .limit(pageable.getPageSize()) // 페이지의 크기를 설정
                .fetch(); //쿼리를 실행하고 결과를 리스트로 반환

        long total = queryFactory.select(Wildcard.count).from(QCar.car) //테이블에서 카운트를 조회하는 쿼리
                .where(regDtsAfter(carSearchDto.getSearchDateType()),
                        searchSellStatusEq(carSearchDto.getSearchSellStatus()),
                        searchByLike(carSearchDto.getSearchBy(), carSearchDto.getSearchQuery()))
                .fetchOne(); //카운트 결괄를 단일값으로 반환

        return new PageImpl<>(content, pageable,total);

    }


    private BooleanExpression carNameLike(String searchQuery){
        return StringUtils.isEmpty(searchQuery) ? null : QCar.car.carName.like("%" + searchQuery + "%");
    }

    @Override
    public Page<SearchCarDto> getMainCarPage(CarSearchDto carSearchDto, Pageable pageable) {
        QCar car = QCar.car;
        QCarImg carImg=  QCarImg.carImg;

        List<SearchCarDto> content = queryFactory
                .select(
                        new QSearchCarDto(
                                car.id,
                                car.carBrand,
                                car.carName,
                                car.carManufacturingDate,
                                car.carOdometer,
                                car.carFuelType,
                                carImg.imgUrl,
                                car.price)
                )
                .from(carImg)
                .join(carImg.car, car)
                .where(carImg.repImgYn.eq("Y"))
                .where(carNameLike(carSearchDto.getSearchQuery()))
                .orderBy(car.id.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        long total = queryFactory
                .select(Wildcard.count)
                .from(carImg)
                .join(carImg.car, car)
                .where(carImg.repImgYn.eq("Y"))
                .where(carNameLike(carSearchDto.getSearchQuery()))
                .fetchOne();



        return new PageImpl<>(content, pageable, total);
    }
    //.select(Wildcard.count)부분은 Querydsl 에서 쿼리 결과의 개수를 가져오기


}