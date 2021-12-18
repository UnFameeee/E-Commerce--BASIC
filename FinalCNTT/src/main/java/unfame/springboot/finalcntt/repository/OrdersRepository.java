package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.Orders;

import java.util.List;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, Long> {
    @Query("SELECT u FROM ORDERS u")
    List<Orders> findAllOrders();


    @Query("SELECT a, b FROM ORDERS a, USER b WHERE a.User_id = b.Id and a.Id =?1")
    List<Object[]> findUserDetailByOrder(Long Id);
}
