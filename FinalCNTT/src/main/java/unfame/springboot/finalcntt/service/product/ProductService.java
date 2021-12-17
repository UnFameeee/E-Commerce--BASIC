package unfame.springboot.finalcntt.service.product;

import org.springframework.stereotype.Service;
import unfame.springboot.finalcntt.entity.Product;

import java.util.HashMap;
import java.util.List;

@Service
public interface ProductService {
    List<Product> getAllProduct();
    HashMap<String, String> deleteProduct(Long Id);
    HashMap<String, String> updateProduct(Product product);
    HashMap<String, String> createProduct(Product product);
    List<Product> getAllProductWithSearch(String value);
    HashMap<String, String> saveIDproduct(Long Id);
    HashMap<String, String> getIDproduct();
    HashMap<String, String> deleteIDproduct();
    Product getProductById();
    HashMap<String, String> updateProductImage(Product product);
}
