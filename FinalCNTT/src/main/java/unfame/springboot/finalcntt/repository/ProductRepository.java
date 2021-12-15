package unfame.springboot.finalcntt.repository;

import org.springframework.data.repository.CrudRepository;
import unfame.springboot.finalcntt.entity.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
