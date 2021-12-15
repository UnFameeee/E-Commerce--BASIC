package unfame.springboot.finalcntt.entity;


import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "PAYMENT")
public class Payment implements Serializable{
    @Id
    @Column(name = "Id", nullable = false)
    private Long Id;

    @Column(name = "Product_method", nullable = false)
    private String Product_method;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getProduct_method() {
        return Product_method;
    }

    public void setProduct_method(String product_method) {
        Product_method = product_method;
    }
}
