package Hello.spring.hello.repository;

import Hello.spring.hello.domain.Member;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

class MemoryMemberRepositoryTest { // 굳이 public 으로 할 필요없어서 지움

    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach // 메서드 실행이 끝날 때마다 실행됨
    public void afterEach() {
        repository.clearStore(); // 저장소 내용 다 지움
    }

    @Test // Test
    public void save() {
        Member member = new Member(); // member 객체 만듦
        member.setName("spring");

        repository.save(member); // 저장소에 객체 member 저장

        // member의 id 값으로, 저장소에 저장된 객체 가져옴
        // get(): 값을 꺼내옴
        Member result = repository.findById(member.getId()).get();

        // member와 저장소에서 가져온 result가 같은 지 검증
        System.out.println("result = " + (result == member));
        Assertions.assertEquals(member, result);
        assertThat(result).isEqualTo(member);
    }

    @Test // Test
    public void findByName() {
        Member member1 = new Member(); // member1 객체 만들어 저장소에 저장
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member(); // member2 객체 만들어 저장소에 저장
        member2.setName("spring2");
        repository.save(member2);

        // member의 이름으로, 저장소에 저장된 객체 가져옴
        Member result = repository.findByName("spring1").get();

        // member1과 저장소에서 가져온 result가 같은 지 검증
        assertThat(result).isEqualTo(member1);
    }

    @Test // Test
    public void findAll() { // findAll
        Member member1 = new Member(); // member1 객체 만들어 저장소에 저장
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member(); // member2 객체 만들어 저장소에 저장
        member2.setName("spring2");
        repository.save(member2);

        // 저장소에 저장된 객체를 List로 가져옴
        List<Member> result = repository.findAll();

        // 저장소에서 가져온 List의 size가 2와 같은 지 검증
        assertThat(result.size()).isEqualTo(2);
    }
}
