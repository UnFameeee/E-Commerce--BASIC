package unfame.springboot.finalcntt.service.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Account;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.global.Encoding;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.repository.AccountRepository;
import unfame.springboot.finalcntt.repository.UserRepository;

import java.util.HashMap;
import java.util.Objects;

@Component
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private UserRepository userRepository;

    //Tạo tài khoản - Khi tạo tài khoản cũng sẽ tạo thêm 1 User với profile = null
    @Override
    public HashMap<String, String> createAccount(Account account){
        //Check xem username đã tồn tại hay là chưa
        Account accountCheck = accountRepository.findAccountByUsername(account.getUsername());
        if(accountCheck == null){
            //Tạo tk
            account.setPassword(Encoding.encode(account.getPassword()));
            accountRepository.save(account);
            //Tạo user với profile = null
            Account accountJustCreated = accountRepository.findAccountByUserNameAndPassword(account.getUsername(), account.getPassword());
            User user = new User();
            user.setAccount_id(accountJustCreated.getId());
            userRepository.save(user);

            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "Username has already existed");}};
    }

    //Update thông tin account
    @Override
    public HashMap<String, String> updateAccountById(Account account, String oldPass){
        //Nhập thông tin mật khẩu cũ trước, check xem mk cũ có trùng với mk cũ mà user nhập không
        Account accountOld = accountRepository.findAccountById(account.getId());

        if(Objects.equals(Encoding.decode((accountOld.getPassword())), oldPass)){
            account.setPassword(Encoding.encode(account.getPassword()));
            accountRepository.save(account);
            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "Old password not match");}};
    }

    //Đăng nhập
    @Override
    public HashMap<String, String> login(Account account) {
        //Để đăng nhập được thì mã hóa trước mật khẩu và mang xuống db tìm kiếm
        account.setPassword(Encoding.encode(account.getPassword()));
        Account accountCheck = accountRepository.findAccountByUserNameAndPassword(account.getUsername(), account.getPassword());
        //Nếu tìm thấy account thì gán global id
        if(accountCheck != null){
            //Nhưng cần phải truy vấn để lấy ra userID
            User user = userRepository.findUserByAccount_id(accountCheck.getId());
            GlobalVariable.IDaccount = accountCheck.getId();
            GlobalVariable.IDuser = user.getId();
            GlobalVariable.UserRole = accountCheck.getRole();
            return new HashMap<>() {{put("key", "Success"); put("UserRole", GlobalVariable.UserRole);}};
        }
        return new HashMap<>() {{put("key", "Account doesn't exist!!!");}};
    }

    //Đăng xuất
    @Override
    public HashMap<String, String> logout() {
        GlobalVariable.IDaccount = -1L;
        GlobalVariable.IDuser = -1L;                     //Truy vấn ra
        GlobalVariable.UserRole = "";
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Hàm trả về Role
    @Override
    public HashMap<String, String> getRole() {
        return new HashMap<>() {{put("UserRole", GlobalVariable.UserRole);}};
    }

    //Hàm trả về các globalID
    @Override
    public HashMap<String, String> getGLobalID() {
        return new HashMap<>() {{put("key", "Success");
            put("IDuser", Long.toString(GlobalVariable.IDuser));
            put("IDaccount", Long.toString(GlobalVariable.IDaccount));
            put("UserRole", GlobalVariable.UserRole);}};
    }
}
