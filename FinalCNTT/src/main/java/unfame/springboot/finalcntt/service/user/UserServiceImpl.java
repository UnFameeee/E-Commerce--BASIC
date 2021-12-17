package unfame.springboot.finalcntt.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Account;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
    public ArrayList<HashMap<String, String>> getProfile() {
        List<Object[]> list = userRepository.findUserAndUsername(GlobalVariable.IDuser);
        ArrayList<HashMap<String, String>> result = new ArrayList<>();

        for(int i = 0; i < list.size(); ++i){
            HashMap<String, String> map = new HashMap<>();
            User user = (User) list.get(i)[0];
            map.put("id", Long.toString(user.getId()));
            map.put("fullname", user.getFullname());
            map.put("email", user.getEmail());
            map.put("image", user.getImage());
            map.put("birth", user.getBirth());
            map.put("gender", user.getGender());
            map.put("phone", user.getPhone());
            map.put("Account_id", Long.toString(user.getAccount_id()));
            Account account = (Account) list.get(i)[1];
            map.put("username", account.getUsername());
            result.add(map);
        }
        return result;
    }
}
