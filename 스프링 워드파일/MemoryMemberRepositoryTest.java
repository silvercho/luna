package hellspring.hello.repository;

import hellspring.hello.domain.Member;
//import org.junit.jupiter.api.Assertions;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


class MemoryMemberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach
    public void afterEach(){
        repository.clearStore();
    }
    //각각 테스트가 끝나면 가져온다.

    @Test
    void save() {
        Member member = new Member();
        member.setName("spring");
        repository.save(member);

        Member result = repository.findById(member.getId()).get();
        //optional 에서 id를 꺼낼때는 get()을 사용한다.
        //Assertions.assertEquals(member,result);
        assertThat(member).isEqualTo(result);

        System.out.println("Member: " + member.toString()); //.toString()은 생략해도 된다.
        System.out.println("Result: " + result);

    }

    @Test
    void findById() {
    }

    @Test
    void findByName() {
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        Member result = repository.findByName("spring2").get(); //optional을 사용시 get으로 부름
        assertThat(result).isEqualTo(member2);
    }

    @Test
    void findAll() {
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        List<Member> result = repository.findAll();
        assertThat(result.size()).isEqualTo(2);
        // 전체 목록의 갯수가 총 2개인지 확인
    }
}