package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("SELECT u FROM USER u WHERE u.Account_id = ?1")
    User findAccountByAccount_id(Long Account_id);

    @Query("SELECT u FROM USER u WHERE u.Id = ?1")
    User findAccountByUser_id(Long Id);
}
