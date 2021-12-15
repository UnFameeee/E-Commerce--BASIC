package unfame.springboot.finalcntt.service.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Cart;
import unfame.springboot.finalcntt.repository.CartRepository;

import java.util.HashMap;

@Component
public class CartService implements ICartService{
    @Autowired
    public CartRepository cartRepository;

    @Override
    public HashMap<String, String> createCart(Cart cart){
        Cart checkCart = cartRepository.findByAllElement(cart.getId().getCategory_id(), cart.getId().getBrand_id(), cart.getId().getProduct_id(), cart.getId().getUser_id());
        if(checkCart != null){
            cartRepository.save(cart);
            new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "This product has been added already");}};
    }

    @Override
    public HashMap<String, String> deleteCart(Cart cart) {
        cartRepository.delete(cart);
        return new HashMap<>() {{put("key", "Success");}};
    }
}
