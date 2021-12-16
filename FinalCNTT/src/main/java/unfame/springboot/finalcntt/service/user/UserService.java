package unfame.springboot.finalcntt.service.user;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.User;

import java.util.HashMap;

@Service
public interface UserService {
    HashMap<String, String> createUser(Long acc_id);
    HashMap<String, String> updateUser(User user);
}
