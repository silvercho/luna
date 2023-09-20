package study.EndGame.ask;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// DTO -> Entity (Entity Class)
// Entity -> DTO (DTO Class)

@Service
@RequiredArgsConstructor
public class AskService {
    private final AskRepository askRepository;

    public void save(AskDto askDto) {
        Ask ask = Ask.toSaveEntity(askDto);
        askRepository.save(ask);
    }

    @Transactional
    public List<AskDto> findAll() {
        List<Ask> askList = askRepository.findAll();
        List<AskDto> askDtoList = new ArrayList<>();
        for (Ask ask: askList) {
            askDtoList.add(AskDto.toAskDto(ask));
        }
        return askDtoList;
    }

    @Transactional
    public void updateHits(Long id) {
        askRepository.updateHits(id);
    }

    @Transactional
    public AskDto findById(Long id) {
        Optional<Ask> optionalAsk = askRepository.findById(id);
        if (optionalAsk.isPresent()) {
            Ask ask = optionalAsk.get();
            AskDto askDto = AskDto.toAskDto(ask);
            return askDto;
        } else {
            return null;
        }
    }

    public AskDto update(AskDto askDto) {
        Ask ask = Ask.toUpdateEntity(askDto);
        askRepository.save(ask);
        return findById(askDto.getId());
    }

    public void delete(Long id) {
        askRepository.deleteById(id);
    }

    public Page<AskDto> paging(Pageable pageable) {
        int page = pageable.getPageNumber() - 1;
        int pageLimit = 3; // 한 페이지에 보여줄 글 갯수
        // 한페이지당 3개씩 글을 보여주고 정렬 기준은 id 기준으로 내림차순 정렬
        // page 위치에 있는 값은 0부터 시작
        Page<Ask> asks =
                askRepository.findAll(PageRequest.of(page, pageLimit, Sort.by(Sort.Direction.DESC, "id")));

        System.out.println("asks.getContent() = " + asks.getContent()); // 요청 페이지에 해당하는 글
        System.out.println("asks.getTotalElements() = " + asks.getTotalElements()); // 전체 글갯수
        System.out.println("asks.getNumber() = " + asks.getNumber()); // DB로 요청한 페이지 번호
        System.out.println("asks.getTotalPages() = " + asks.getTotalPages()); // 전체 페이지 갯수
        System.out.println("asks.getSize() = " + asks.getSize()); // 한 페이지에 보여지는 글 갯수
        System.out.println("asks.hasPrevious() = " + asks.hasPrevious()); // 이전 페이지 존재 여부
        System.out.println("asks.isFirst() = " + asks.isFirst()); // 첫 페이지 여부
        System.out.println("asks.isLast() = " + asks.isLast()); // 마지막 페이지 여부

        // 목록: id, writer, title, hits, createdTime
        Page<AskDto> askDtoS = asks.map(ask -> new AskDto(ask.getId(), ask.getAskWriter(), ask.getAskTitle(), ask.getAskHits(), ask.getCreatedTime()));
        return askDtoS;
    }
}



