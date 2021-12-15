package unfame.springboot.finalcntt.repository;

import org.springframework.data.repository.CrudRepository;
import unfame.springboot.finalcntt.entity.Orders;

public interface OrdersRepository extends CrudRepository<Orders, Long> {
}
