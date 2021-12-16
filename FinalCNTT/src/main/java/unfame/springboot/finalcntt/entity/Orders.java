package unfame.springboot.finalcntt.entity;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import javax.persistence.*;

@Component
@Entity(name = "ORDERS")
@Table(name = "ORDERS")
public class Orders{
    @Id
    @Column(name = "Id", nullable = false)
    private Long Id;

    @Column(name = "Product_id", nullable = false)
    private Long Product_id;

    @Column(name = "User_id", nullable = false)
    private Long User_id;

    @Column(name = "Date", nullable = false)
    private String Date;

    @Column(name = "Quantity", nullable = false)
    private Integer Quantity;

    @Column(name = "Address", nullable = false)
    private String Address;

    @Column(name = "Status", nullable = false)
    private String Status;

    @Column(name = "Amount", nullable = false)
    private Long Amount;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getProduct_id() {
        return Product_id;
    }

    public void setProduct_id(Long product_id) {
        Product_id = product_id;
    }

    public Long getUser_id() {
        return User_id;
    }

    public void setUser_id(Long user_id) {
        User_id = user_id;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public Integer getQuantity() {
        return Quantity;
    }

    public void setQuantity(Integer quantity) {
        Quantity = quantity;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public Long getAmount() {
        return Amount;
    }

    public void setAmount(Long amount) {
        Amount = amount;
    }
}
