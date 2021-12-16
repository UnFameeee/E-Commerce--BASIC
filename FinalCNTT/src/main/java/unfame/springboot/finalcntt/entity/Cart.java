package unfame.springboot.finalcntt.entity;

import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.key.CartKey;

import javax.persistence.*;
import java.io.Serializable;

@Component
@Entity(name = "CART")
@Table(name = "CART")
public class Cart {
    @EmbeddedId
    private CartKey Id;

    public CartKey getId() {
        return Id;
    }

    public void setId(CartKey id) {
        Id = id;
    }
}
