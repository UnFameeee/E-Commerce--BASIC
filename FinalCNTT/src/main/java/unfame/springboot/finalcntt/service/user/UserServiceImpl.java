package unfame.springboot.finalcntt.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.repository.UserRepository;

import java.util.HashMap;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public HashMap<String, String> updateProfile(User user) {
        if(!GlobalVariable.checkSession()){
            return new HashMap<>() {{put("Error", "Please login first!!!");}};
        }

        User UserCheck = userRepository.findById(GlobalVariable.IDuser).orElse(null);
        if(UserCheck != null){
            user.setId(GlobalVariable.IDuser);
            user.setImage(UserCheck.getImage());
            user.setAccount_id(GlobalVariable.IDaccount);
            userRepository.save(user);
            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "Fail");}};
    }

    @Override
    public HashMap<String, String> updateImage(User user) {
        User UserCheck = userRepository.findById(GlobalVariable.IDuser).orElse(null);
        if(UserCheck != null){
            UserCheck.setImage(user.getImage());
            userRepository.save(UserCheck);
            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "Fail");}};
    }

    @Override
    public User getProfile() {
        return userRepository.findAccountByUser_id(GlobalVariable.IDuser);
    }
}
