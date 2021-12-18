package unfame.springboot.finalcntt.service.orders;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Orders;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public interface OrdersService {
    HashMap<String, String> boughtProduct(Long Product_id, Integer quantity);
    List<Orders> getAllOrders();
    ArrayList<HashMap<String, String>> findUserDetailOnOrders(Long Order_id);
    HashMap<String, String> saveOrderID(Long Id);
}
