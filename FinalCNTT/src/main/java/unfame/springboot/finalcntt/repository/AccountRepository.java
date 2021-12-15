package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
    @Query("SELECT u FROM ACCOUNT u WHERE u.Id = ?1")
    Account findAccountById(Long id);
}
