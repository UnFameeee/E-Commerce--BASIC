package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("SELECT u FROM USER u WHERE u.Account_id = ?1")
    User findUserByAccount_id(Long Account_id);

//    @Query("SELECT u FROM USER u WHERE u.Id = ?1")
//    User findUserByUser_id(Long Id);

    @Query("SELECT a, b FROM USER a , ACCOUNT b WHERE a.Account_id = b.Id and a.Id =?1")
    List<Object[]> findUserAndUsername(Long Id);
}
