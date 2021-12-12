package unfame.springboot.finalcntt.entity;

import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.key.CartKey;

import javax.persistence.*;

@Component
@Entity(name = "cart")
@Table(name = "cart")
public class Cart {
    @EmbeddedId
    private CartKey id;

    public CartKey getId() {
        return id;
    }

    public void setId(CartKey id) {
        this.id = id;
    }
}
