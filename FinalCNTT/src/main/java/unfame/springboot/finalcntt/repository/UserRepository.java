package unfame.springboot.finalcntt.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
