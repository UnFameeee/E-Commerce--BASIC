package unfame.springboot.finalcntt.entity;

import org.springframework.stereotype.Component;

import java.io.Serializable;

import javax.persistence.*;

@Component
@Entity(name = "PRODUCT")
@Table(name = "PRODUCT")
public class Product{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false)
    private Long Id;

    @Column(name = "Product_name", nullable = false)
    private String Product_name;

    @Column(name = "Product_description", nullable = true)
    private String Product_description;

    @Column(name = "Product_image", length = Integer.MAX_VALUE, nullable = true)
    private String Product_image;

    @Column(name = "Quantity", nullable = false)
    private Integer Quantity;

    @Column(name = "Price", nullable = false)
    private Long Price;

    @Column(name = "Guarantee", nullable = false)
    private Integer Guarantee;

    @Column(name = "Brand", nullable = false)
    private String Brand;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getProduct_name() {
        return Product_name;
    }

    public void setProduct_name(String product_name) {
        Product_name = product_name;
    }

    public String getProduct_description() {
        return Product_description;
    }

    public void setProduct_description(String product_description) {
        Product_description = product_description;
    }

    public String getProduct_image() {
        return Product_image;
    }

    public void setProduct_image(String product_image) {
        Product_image = product_image;
    }

    public Integer getQuantity() {
        return Quantity;
    }

    public void setQuantity(Integer quantity) {
        Quantity = quantity;
    }

    public Long getPrice() {
        return Price;
    }

    public void setPrice(Long price) {
        Price = price;
    }

    public Integer getGuarantee() {
        return Guarantee;
    }

    public void setGuarantee(Integer guarantee) {
        Guarantee = guarantee;
    }

    public String getBrand() {
        return Brand;
    }

    public void setBrand(String brand) {
        Brand = brand;
    }
}