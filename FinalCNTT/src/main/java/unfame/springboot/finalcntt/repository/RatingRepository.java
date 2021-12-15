package unfame.springboot.finalcntt.repository;

import org.springframework.data.repository.CrudRepository;
import unfame.springboot.finalcntt.entity.Rating;

public interface RatingRepository extends CrudRepository<Rating, Long> {
}
