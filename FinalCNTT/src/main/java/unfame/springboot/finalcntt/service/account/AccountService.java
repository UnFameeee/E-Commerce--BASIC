package unfame.springboot.finalcntt.service.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Account;
import unfame.springboot.finalcntt.global.Encoding;
import unfame.springboot.finalcntt.repository.AccountRepository;

import java.util.HashMap;
import java.util.Objects;

@Component
public class AccountService implements IAccountService{
    @Autowired
    private AccountRepository accountRepository;

    //Tạo tài khoàn
    @Override
    public HashMap<String, String> createAccount(Account account){
        account.setPassword(Encoding.encode(account.getPassword()));
        accountRepository.save(account);
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Update thông tin account
    @Override
    public HashMap<String, String> updateAccountById(Account account, String oldPass){
        //Nhập thông tin mật khẩu cũ trước, check xem được không
        Account accountOld = accountRepository.findAccountById(account.getId());

        if(Objects.equals(Encoding.decode((accountOld.getPassword())), oldPass)){
            account.setPassword(Encoding.encode(account.getPassword()));
            accountRepository.save(account);
        }else{
            return new HashMap<>() {{put("key", "Old password not match");}};
        }
        return new HashMap<>() {{put("key", "Success");}};
    }
}
