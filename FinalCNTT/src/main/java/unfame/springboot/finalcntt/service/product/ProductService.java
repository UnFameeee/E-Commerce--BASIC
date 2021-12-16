package unfame.springboot.finalcntt.service.product;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Product;

import java.util.HashMap;
import java.util.List;

@Service
public interface ProductService {
    List<Product> getAllProduct();
    HashMap<String, String> createProduct(Product product);
}
