package unfame.springboot.finalcntt.service.account;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Account;

import java.util.HashMap;

@Service
public interface IAccountService {
    HashMap<String, String> updateAccountById(Account account, String oldPass);
    HashMap<String, String> createAccount(Account account);
}