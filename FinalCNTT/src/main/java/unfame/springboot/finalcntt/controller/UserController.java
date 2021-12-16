package unfame.springboot.finalcntt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.service.user.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;

    //Chỉnh sửa profile
    @PutMapping("/update")
    public ResponseEntity<?> updateProfile(@RequestBody User req) {
        return ResponseEntity.ok(userService.updateProfile(req));
    }

    //Lấy ra profile của user
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        return ResponseEntity.ok(userService.getProfile());
    }
}