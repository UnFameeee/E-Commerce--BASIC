package unfame.springboot.finalcntt.entity;

import unfame.springboot.finalcntt.entity.key.CartKey;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "CART")
@Table(name = "CART")
public class Cart implements Serializable {
    @EmbeddedId
    private CartKey Id;

    public CartKey getId() {
        return Id;
    }

    public void setId(CartKey id) {
        Id = id;
    }
}
