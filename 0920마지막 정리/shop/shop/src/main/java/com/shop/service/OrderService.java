package com.shop.service;

import com.shop.dto.OrderDto;
import com.shop.dto.OrderHistoryDto;
import com.shop.dto.OrderItemDto;
import com.shop.entity.*;
import com.shop.repository.ItemImgRepository;
import com.shop.repository.ItemRepository;
import com.shop.repository.MemberRepository;
import com.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.util.StringUtils;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

    private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;
    private final ItemImgRepository itemImgRepository;


    public Long order(OrderDto orderDto, String email) {
        //주문하려는 아이템 itemRepository 에서 아이템 Id를 조회하고
        //존재하지 않으면 EntityNotFoundException::new
        Item item = itemRepository.findById(orderDto.getItemId())
                .orElseThrow(EntityNotFoundException::new);

        //주문자
        //주문을 생성하는 회원 memberRepository 에서 이메일을 이용해 조회
        Member member = memberRepository.findByEmail(email);

        //주문이 여러개일 경우를 위해 리스트화
        List<OrderItem> orderItemList = new ArrayList<>();
        //주문 항목을 생성 OrderItem 클래스의 createOrderItem 메서드를 호출해서 주문항목을 생성
        OrderItem orderItem = OrderItem.createOrderItem(item, orderDto.getCount());
        //주문 리스트에 주문항목과 주문수량을 추가
        orderItemList.add(orderItem);
        //주문을 생성 (createOrder 메서드 호출)
        Order order = Order.createOrder(member, orderItemList);
        //주문 내역을 데이터베이스(orderRepository)에 저장
        orderRepository.save(order);
        //생성된 주문 id를 반환
        return order.getId();
    }

    @Transactional(readOnly = true)
    public Page<OrderHistoryDto> getOrderList(String email, Pageable pageable){
        List<Order> orders = orderRepository.findOrders(email, pageable);
        // 주문 레포지토리에서 입력 받은 메일 주소와 페이징 정보를 기반으로 주문 목록 조회
        Long totalCount = orderRepository.countOrder(email);
        // 유저의 주문 총 개수를 구합니다.
        List<OrderHistoryDto> orderHistoryDtos = new ArrayList<>();

        for(Order order : orders){
            // 조회된 주문 목록을 순회하면서 각 주문에 대한 정보를 OrderHistoryDto 로 변환
            OrderHistoryDto orderHistoryDto = new OrderHistoryDto(order);
            List<OrderItem> orderItems = order.getOrderItems();
            // 해당 주문에 속한 모든 주문 항목을 조회
            for (OrderItem orderItem : orderItems){
                // 조회된 주문 항목을 순회하면서
                ItemImg itemImg = itemImgRepository.findByItemIdAndRepimgYn
                        (orderItem.getItem().getId(),"Y");
                // 대표이미지 조회
                OrderItemDto orderItemDto =
                        new OrderItemDto(orderItem, itemImg.getImgUrl());
                // orderItem 과 이미지 주소 조회
                orderHistoryDto.addOrderItemDto(orderItemDto);
                // 생성된 orderItemDto 를 orderHistDto 리스트에 추가
            }
            orderHistoryDtos.add(orderHistoryDto);    // orderHistoryDto 리스트에 추가
        }

        return new PageImpl<OrderHistoryDto>(orderHistoryDtos, pageable, totalCount);
        // 생성된 orderHistoryDtos 리스트를 페이징 처리하여 반환
    }

    @Transactional(readOnly = true)
    public boolean validateOrder(Long orderId, String email){
        Member currentMember = memberRepository.findByEmail(email);
        Order order = orderRepository.findById(orderId).
                /* findById가 repository 에 optional 로 처리되어있어 무조건 예외 처리를 해줘야한다. 안그럼 에러발생 */
                orElseThrow(EntityNotFoundException::new);
        Member savedMember = order.getMember();
        if(!StringUtils.equals(currentMember.getEmail(), savedMember.getEmail())){
            return false;
        }
        return true;
    }
    public void cancelOrder(Long orderId){
        Order order = orderRepository.findById(orderId).
                orElseThrow(EntityNotFoundException::new);
        order.cancelOrder();
    }

    /*
        Optional을 사용하여 처리하면, orderRepository.findById(orderId)의 반환값이
        Optional<Order> 타입이 되므로, 주문을 찾지 못한 경우에도 예외 대신에 Optional 객체를 반환할 수 있습니다.
        이 경우에는 예외를 직접 던지지 않고, 반환된 Optional 객체를 가지고 원하는 처리를 수행할 수 있습니다.

        예를 들어, Optional을 사용하여 처리한 코드는 다음과 같을 수 있습니다:

        java
        Copy code
        Optional<Order> orderOptional = orderRepository.findById(orderId);

        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            // 주문을 찾은 경우에 수행할 로직
        } else {
            // 주문을 찾지 못한 경우에 수행할 로직
        }
    */
    /*
        // 주문을 찾은 경우에 수행할 로직
        orderOptional.ifPresent(order -> {});

        // 주문을 찾지 못한 경우에 수행할 로직
        if (!orderOptional.isPresent()) {}
        이 방식은 예외를 사용하지 않고도 Optional 객체의 존재 여부에 따라 다른 동작을 수행할 수 있습니다.
        주로 예외를 사용하지 않는 경우에 사용되며, 코드의 가독성을 높일 수 있습니다.
    */
}