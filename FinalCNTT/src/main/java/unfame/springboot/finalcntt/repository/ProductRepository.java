package unfame.springboot.finalcntt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import unfame.springboot.finalcntt.entity.Product;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    @Query("SELECT u FROM PRODUCT u")
    List<Product> findAllProduct();

    @Query("SELECT u FROM PRODUCT u WHERE u.Brand LIKE %:value%")
    List<Product> findAllProductWithSearch(String value);

    @Query("SELECT u FROM PRODUCT u WHERE u.Product_name = ?1")
    Product findProductByName(String Product_name);

    @Query("SELECT u FROM PRODUCT u WHERE u.Id = ?1")
    Product findProductById(Long Id);
}
