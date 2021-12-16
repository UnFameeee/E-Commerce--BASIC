package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import unfame.springboot.finalcntt.entity.Cart;

public interface CartRepository extends CrudRepository<Cart, Long> {
    @Query("SELECT u FROM CART u WHERE u.Id.Product_id =?1 and u.Id.User_id = ?2")
    Cart findByAllElement(Long Product_id, Long User_id);
}
