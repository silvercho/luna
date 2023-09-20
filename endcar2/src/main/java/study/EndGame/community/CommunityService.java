package study.EndGame.community;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import study.EndGame.entity.FileEntity;
import study.EndGame.repository.FileRepository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// DTO -> Entity (Entity Class)
// Entity -> DTO (DTO Class)

@Service
@RequiredArgsConstructor
public class CommunityService {
    private final CommunityRepository communityRepository;
    private final FileRepository fileRepository;
    public void save(CommunityDto communityDto) throws IOException {
        // 파일 첨부 여부에 따라 로직 분리
        if (communityDto.getCommunityFile().isEmpty()) {
            // 첨부 파일 없음.
            Community community = Community.toSaveEntity(communityDto);
            communityRepository.save(community);
        } else {
            // 첨부 파일 있음.
            MultipartFile communityFile = communityDto.getCommunityFile(); // 1.
            String originalFilename = communityFile.getOriginalFilename(); // 2.
            String storedFileName = System.currentTimeMillis() + "_" + originalFilename; // 3.
            String savePath = "D:/endcar2/src/main/resources/static/img/" + storedFileName; // 4.
//            String savePath = "D:/TeamProjectEndGame8/src/main/resources/templates/community/" + storedFileName; // 4.
            communityFile.transferTo(new File(savePath)); // 5.

            // community 저장
            Community community = Community.toSaveFileEntity(communityDto);
            communityRepository.save(community);

            // 저장된 community 에서 id 가져오기
            Long savedId = community.getId();

            // id가 null 이 아닌 경우에만 FileEntity 생성
            if (savedId != null) {
                Community communityEntity = communityRepository.findById(savedId).get();
                FileEntity fileEntity = FileEntity.toFileEntity(communityEntity, originalFilename, storedFileName);
                fileRepository.save(fileEntity);
            }
        }
    }


    @Transactional
    public List<CommunityDto> findAll() {
        List<Community> communityList = communityRepository.findAll();
        List<CommunityDto> communityDtoList = new ArrayList<>();
        for (Community community: communityList) {
            communityDtoList.add(CommunityDto.toCommunityDto(community));
        }
        return communityDtoList;
    }

    @Transactional
    public void updateHits(Long id) {
        communityRepository.updateHits(id);
    }

    @Transactional
    public CommunityDto findById(Long id) {
        Optional<Community> optionalCommunity = communityRepository.findById(id);
        if (optionalCommunity.isPresent()) {
            Community community = optionalCommunity.get();
            CommunityDto communityDto = CommunityDto.toCommunityDto(community);
            return communityDto;
        } else {
            return null;
        }
    }

    public CommunityDto update(CommunityDto communityDto) {
        Community community = Community.toUpdateEntity(communityDto);
        communityRepository.save(community);
        return findById(communityDto.getId());
    }

    public void delete(Long id) {
        communityRepository.deleteById(id);
    }

    public Page<CommunityDto> paging(Pageable pageable) {
        int page = pageable.getPageNumber() - 1;
        int pageLimit = 3; // 한 페이지에 보여줄 글 갯수
        // 한페이지당 3개씩 글을 보여주고 정렬 기준은 id 기준으로 내림차순 정렬
        // page 위치에 있는 값은 0부터 시작
        Page<Community> communities =
                communityRepository.findAll(PageRequest.of(page, pageLimit, Sort.by(Sort.Direction.DESC, "id")));

        System.out.println("communities.getContent() = " + communities.getContent()); // 요청 페이지에 해당하는 글
        System.out.println("communities.getTotalElements() = " + communities.getTotalElements()); // 전체 글갯수
        System.out.println("communities.getNumber() = " + communities.getNumber()); // DB로 요청한 페이지 번호
        System.out.println("communities.getTotalPages() = " + communities.getTotalPages()); // 전체 페이지 갯수
        System.out.println("communities.getSize() = " + communities.getSize()); // 한 페이지에 보여지는 글 갯수
        System.out.println("communities.hasPrevious() = " + communities.hasPrevious()); // 이전 페이지 존재 여부
        System.out.println("communities.isFirst() = " + communities.isFirst()); // 첫 페이지 여부
        System.out.println("communities.isLast() = " + communities.isLast()); // 마지막 페이지 여부

        // 목록: id, writer, title, hits, createdTime
        Page<CommunityDto> communityDtoS = communities.map(community -> new CommunityDto(community.getId(), community.getCommunityWriter(), community.getCommunityTitle(), community.getCommunityHits(), community.getCreatedTime()));
        return communityDtoS;
    }
}



