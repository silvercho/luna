package com.example.secondproject.ioc;

public class Chef {
    public String cook(String menu){
        // 재료준비
        Pork pork = new Pork("한돈 등심");
        // 요리 반환
        return pork.getName() + "으로 만든" + menu;
    }
}
