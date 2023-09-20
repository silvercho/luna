package study.EndGame.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import study.EndGame.dto.CommentDto;
import study.EndGame.entity.CommentEntity;
import study.EndGame.entity.Community;
import study.EndGame.repository.CommentRepository;
import study.EndGame.repository.CommunityRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommunityRepository communityRepository;

    public Long save(Long communityId, CommentDto commentDto) {
        Optional<Community> optionalCommunity = communityRepository.findById(communityId);
        if (optionalCommunity.isPresent()) {
            Community community = optionalCommunity.get();
            CommentEntity commentEntity = CommentEntity.toSaveEntity(commentDto, community);
            return commentRepository.save(commentEntity).getId();
        } else {
            return null;
        }
    }

    public List<CommentDto> findAll(Long communityId) {
        Optional<Community> optionalCommunity = communityRepository.findById(communityId);
        if (optionalCommunity.isPresent()) {
            Community community = optionalCommunity.get();
            List<CommentEntity> commentEntityList = commentRepository.findAllByCommunityOrderByIdDesc(community);

            List<CommentDto> commentDtoList = new ArrayList<>();
            for (CommentEntity commentEntity : commentEntityList) {
                CommentDto commentDto = CommentDto.toCommentDto(commentEntity, communityId);
                commentDtoList.add(commentDto);
            }
            return commentDtoList;
        } else {
            return Collections.emptyList();
        }
    }
}
