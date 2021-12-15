package unfame.springboot.finalcntt.entity;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "ORDERS")
public class Orders implements Serializable{
    @Id
    @Column(name = "Id", nullable = false)
    private Long Id;

    @Column(name = "Product_id", nullable = false)
    private Long Product_id;

    @Column(name = "Category_id", nullable = false)
    private Long Category_id;

    @Column(name = "Brand_id", nullable = false)
    private Long Brand_id;

    @Column(name = "User_id", nullable = false)
    private Long User_id;

    @Column(name = "Date", nullable = false)
    private String Date;

    @Column(name = "Quantity", nullable = false)
    private int Quantity;

    @Column(name = "Address", nullable = false)
    private String Address;

    @Column(name = "Status", nullable = false)
    private String Status;

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

    public Long getCategory_id() {
        return Category_id;
    }

    public void setCategory_id(Long category_id) {
        Category_id = category_id;
    }

    public Long getBrand_id() {
        return Brand_id;
    }

    public void setBrand_id(Long brand_id) {
        Brand_id = brand_id;
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

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int quantity) {
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
}
