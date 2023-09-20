package study.EndGame.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import study.EndGame.dto.CarRegistrationDto;
import study.EndGame.entity.User;
import study.EndGame.service.UserService;
import study.EndGame.service.CarService;


@Controller
@RequiredArgsConstructor
@RequestMapping("/security-login")
public class MainController {
    private final CarService carService;
    private final UserService userService;

    @GetMapping(value = {"", "/"})
    public String home(Model model, Authentication auth) {

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }
        return "home";
    }

    @GetMapping(value = {"customerSupport"})
    public String CS(Model model, Authentication auth){

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }
        return "customerSupport";
    }

    @GetMapping(value = "/car/{carId}")
    public String carDtl(Model model, Authentication auth, @PathVariable("carId") Long carId){
        CarRegistrationDto carRegistrationDto = carService.getCarDtl(carId);
        model.addAttribute("car", carRegistrationDto);

        if(auth != null) {
            User loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("name", loginUser.getName());
            }
        }

        return "car/carDtl";
    }

}
