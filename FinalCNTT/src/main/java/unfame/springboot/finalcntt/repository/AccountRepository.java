package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.Account;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
    @Query("SELECT u FROM ACCOUNT u WHERE u.Id = ?1")
    Account findAccountById(Long Id);

    @Query("SELECT u FROM ACCOUNT u WHERE u.Username = ?1")
    Account findAccountByUsername(String Username);

    @Query("SELECT u FROM ACCOUNT u WHERE u.Username = ?1 and u.Password = ?2")
    Account findAccountByUserNameAndPassword(String Username, String Password);

    @Query("SELECT a, b FROM ACCOUNT a, USER b WHERE a.Id = ?1 and a.Id = b.Account_id")
    List<Object[]> findAccountUsernameWithImage(Long Id);
}
