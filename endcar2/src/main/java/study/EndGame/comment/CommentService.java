package study.EndGame.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import study.EndGame.community.Community;
import study.EndGame.community.CommunityRepository;

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
            Comment comment = Comment.toSave(commentDto, community);
            return commentRepository.save(comment).getId();
        } else {
            return null;
        }
    }

    public List<CommentDto> findAll(Long communityId) {
        Optional<Community> optionalCommunity = communityRepository.findById(communityId);
        if (optionalCommunity.isPresent()) {
            Community community = optionalCommunity.get();
            List<Comment> commentList = commentRepository.findAllByCommunityOrderByIdDesc(community);

            List<CommentDto> commentDtoList = new ArrayList<>();
            for (Comment comment : commentList) {
                CommentDto commentDto = CommentDto.toCommentDto(comment, communityId);
                commentDtoList.add(commentDto);
            }
            return commentDtoList;
        } else {
            return Collections.emptyList();
        }
    }
}
