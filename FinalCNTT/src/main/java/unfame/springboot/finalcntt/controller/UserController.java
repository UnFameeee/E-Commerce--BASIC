package unfame.springboot.finalcntt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.service.user.IUserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Qualifier("IUserService")
    @Autowired
    private IUserService iUserService;

    @PostMapping("/fileupload")
    public String fileUpload(@RequestParam("name") String name, @RequestParam("file") MultipartFile file) {
        return "";
    }
}