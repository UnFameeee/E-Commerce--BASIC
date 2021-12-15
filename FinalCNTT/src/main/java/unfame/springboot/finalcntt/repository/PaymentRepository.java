package unfame.springboot.finalcntt.repository;

import org.springframework.data.repository.CrudRepository;
import unfame.springboot.finalcntt.entity.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Long> {
}
