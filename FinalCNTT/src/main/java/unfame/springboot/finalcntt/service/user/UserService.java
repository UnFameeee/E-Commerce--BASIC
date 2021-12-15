package unfame.springboot.finalcntt.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.repository.UserRepository;

import java.util.HashMap;

@Component
public class UserService implements IUserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public HashMap<String, String> createUser(Long acc_id){
        User user = new User();
        user.setAccount_id(acc_id);
        userRepository.save(user);
        return new HashMap<>() {{put("key", "Success");}};
    }

    @Override
    public HashMap<String, String> updateUser(User user){
        User UserOld = userRepository.findById(user.getId()).orElse(null);
        if(UserOld != null){
            userRepository.save(user);
            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "Fail");}};
    }
}
