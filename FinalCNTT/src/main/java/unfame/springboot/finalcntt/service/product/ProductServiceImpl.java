package unfame.springboot.finalcntt.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Product;
import unfame.springboot.finalcntt.repository.ProductRepository;

import java.util.HashMap;
import java.util.List;

@Component
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public HashMap<String, String> createProduct(Product product){
        productRepository.save(product);
        return new HashMap<>() {{put("key", "Success");}};
    }

    @Override
    public HashMap<String, String> updateProduct(Product product){

        productRepository.save(product);
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Trả về danh sách của tất cả các sản phẩm mà được search
    @Override
    public List<Product> getAllProductWithSearch(String value){
        return productRepository.findAllProductWithSearch(value);
    }

    //Trả về danh sách của tất cả các sản phẩm
    @Override
    public List<Product> getAllProduct(){
        return productRepository.findAllProduct();
    }

    @Override
    public HashMap<String, String> deleteProduct(Product product) {

        return new HashMap<>() {{put("key", "Success");}};
    }
}
