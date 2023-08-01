package hellospring.hello.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class TimeTraceAop {
    @Around("execution(* hello.hellospring.hello..*(..))")
    public Object execute(ProceedingJoinPoint joinPoint)throws Throwable{
        long start = System.currentTimeMillis();
        System.out.println("START: " + joinPoint.toString());
        try {
            return  joinPoint.proceed();
        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("END: " + joinPoint.toString() + " " + timeMs + "ms"); }
    }
}

// @Aspect 어노테이션 으로 AOP 의 Advice 역할을 수행합니다.
// @Around("execution(* hellospring.hello..*(..))")
// hellospring.hello 패키지와 그 하위 패키지에 속한
// 모든 메서드들을 대상으로 AOP 를 적용하겠다는 의미입니다.

// .execute 메서드는 @Around 어노테이션에 정의된 포인트컷(Pointcut) 에
// 해당하는 메서드들이 실행될 때 호출됩니다.

// execute 메서드는 다음과 같은 작업을 수행합니다.

//System.currentTimeMillis()를 사용하여 메서드 실행 시작 시간을 기록합니다.
// joinPoint.toString() 을 사용하여 현재 실행되고 있는 메서드를 문자열로 표현하여 로깅합니다.
// joinPoint.proceed()를 호출하여 대상 메서드를 실행합니다.

// 메서드 실행이 완료된 후 , System.currentTimeMillis() 를 다시 사용하여 메서드 실행 종료 시간을 기록합니다.
// 실행 종료 시간에서 시작 시간을 빼서 메서드 실행 시간을 계산합니다.
