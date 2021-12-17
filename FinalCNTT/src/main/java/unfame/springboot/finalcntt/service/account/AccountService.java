package unfame.springboot.finalcntt.service.account;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Account;

import java.util.ArrayList;
import java.util.HashMap;

@Service
public interface AccountService {
    HashMap<String, String> updateAccountById(Account account, String oldPass);
    HashMap<String, String> createAccount(Account account);
    HashMap<String, String> login(Account account);
    HashMap<String, String> logout();
    HashMap<String, String> getGLobalID();
    HashMap<String, String> getRole();
    ArrayList<HashMap<String, String>> getUsernameWithImage();
}
