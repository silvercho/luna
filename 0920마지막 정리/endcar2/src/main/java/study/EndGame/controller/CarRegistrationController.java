package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import study.EndGame.dto.CarRegistrationDto;
import study.EndGame.entity.User;
import study.EndGame.service.AuthenticationFacade;
import study.EndGame.service.UserService;
import study.EndGame.service.CarRegistrationService;
import study.EndGame.service.CarService;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login")
public class CarRegistrationController {

    private final CarRegistrationService carRegistrationService;
    private final CarService carService;
    private final UserService userService;


    @Autowired
    private AuthenticationFacade authenticationFacade;

    @GetMapping(value = "/registration")
    public String RegistrationForm(Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }

        model.addAttribute("carRegistrationDto", new CarRegistrationDto());
        return "car/carRegistration";
    }

@PostMapping(value = "/registration")
public String carNew(@Valid CarRegistrationDto carRegistrationDto, BindingResult bindingResult,
                      Model model, @RequestParam("carImgFile") List<MultipartFile> carImgFileList){
    if(bindingResult.hasErrors()){
        return "car/carRegistration";
    }
    if(carImgFileList.get(0).isEmpty() && carRegistrationDto.getId() == null){
        model.addAttribute("errorMessage", "첫번째 차량 이미지는 필수 입력 값 입니다.");
        return "car/carRegistration";
    }
    try {
        carService.saveCar(carRegistrationDto, carImgFileList);
    } catch (Exception e){
        model.addAttribute("errorMessage", "차량 등록 중 에러가 발생하였습니다.");
        return "errorPage/carRegistrationError";
    }

    return "redirect:/security-login";
}
}
