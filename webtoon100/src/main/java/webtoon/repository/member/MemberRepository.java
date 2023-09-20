package webtoon.repository.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import webtoon.entity.member.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
}
