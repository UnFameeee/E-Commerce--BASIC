package unfame.springboot.finalcntt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unfame.springboot.finalcntt.entity.Account;
import unfame.springboot.finalcntt.service.account.AccountService;

@RestController
@RequestMapping(value = "/account")
public class AccountController {
//    @Qualifier("IAccountService")
    @Autowired
    private AccountService accountService;
    //Mặc định nếu thành công thì sẽ trả ra Key, Value ("Key", "Success")

    //Tạo tài khoản mới (Mặc định role là User) - Khi tạo tài khoản cũng sẽ tạo thêm 1 User với profile = null
    @PostMapping("/register")
    public ResponseEntity<?> createAccount(@RequestBody Account req){
        return ResponseEntity.ok(accountService.createAccount(req));
    }

    //Chỉnh sửa tài khoản
    @PutMapping("/update")
    public ResponseEntity<?> updateAccount(@RequestBody Account req, @RequestParam String oldPass){
        return ResponseEntity.ok(accountService.updateAccountById(req, oldPass));
    }

    //Đăng nhập
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Account req){
        return ResponseEntity.ok(accountService.login(req));
    }

    //Đăng xuất
    @PostMapping("/logout")
    public ResponseEntity<?> logout(){
        return ResponseEntity.ok(accountService.logout());
    }

    //Lấy ra globalID
    @GetMapping("/getGlobalID")
    public ResponseEntity<?> getGlobalID(){
        return ResponseEntity.ok(accountService.getGLobalID());
    }
}
