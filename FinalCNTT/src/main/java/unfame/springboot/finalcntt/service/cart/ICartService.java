package unfame.springboot.finalcntt.service.cart;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Cart;

import java.util.HashMap;

@Service
public interface ICartService {
    HashMap<String, String> createCart(Cart cart);
    HashMap<String, String> deleteCart(Cart cart);
}
