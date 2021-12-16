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
}
