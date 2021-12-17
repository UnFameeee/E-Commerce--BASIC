package unfame.springboot.finalcntt.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Product;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.repository.ProductRepository;

import java.util.HashMap;
import java.util.List;

@Component
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    //Hàm create product
    @Override
    public HashMap<String, String> createProduct(Product product){
        //Check xem tên sản phẩm đó có tồn tại không
        Product productCheck = productRepository.findProductByName(product.getProduct_name());
        if(productCheck == null){
            productRepository.save(product);
            return new HashMap<>() {{put("key", "Success");}};
        }
        return new HashMap<>() {{put("key", "This product already existed");}};
    }

    //Hàm update product
    @Override
    public HashMap<String, String> updateProduct(Product product){
        if(product.getProduct_name() == null ||
            product.getProduct_image() == null ||
            product.getProduct_description() == null ||
            product.getBrand() == null ||
            product.getGuarantee() == null ||
            product.getPrice() == null ||
            product.getQuantity() == null){
            return new HashMap<>() {{put("key", "Missing value to update product!!!");}};
        }
        product.setId(GlobalVariable.IDproduct);
        product.setProduct_image(productRepository.findProductById(GlobalVariable.IDproduct).getProduct_image());
        productRepository.save(product);
        GlobalVariable.IDproduct = -1L;
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Hàm update image product
    @Override
    public HashMap<String, String> updateProductImage(Product product){
        Product productCheck = productRepository.findProductById(GlobalVariable.IDproduct);
        productCheck.setProduct_image(product.getProduct_image());
        productRepository.save(productCheck);
        return new HashMap<>() {{put("key", "Success");}};
    }

    @Override
    public Product getProductById(){
        return productRepository.findProductById(GlobalVariable.IDproduct);
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

    //Xóa product
    @Override
    public HashMap<String, String> deleteProduct(Long Id) {
        productRepository.deleteById(Id);
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Lưu lại IDproduct
    @Override
    public HashMap<String, String> saveIDproduct(Long Id) {
        GlobalVariable.IDproduct = Id;
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Lưu lại IDproduct
    @Override
    public HashMap<String, String> getIDproduct() {
        return new HashMap<>() {{put("key", Long.toString(GlobalVariable.IDproduct));}};
    }

    //Lưu lại IDproduct
    @Override
    public HashMap<String, String> deleteIDproduct() {
        GlobalVariable.IDproduct = -1L;
        return new HashMap<>() {{put("key", "Success");}};
    }
}
