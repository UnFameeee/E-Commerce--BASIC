package unfame.springboot.finalcntt.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCT")
public class Product implements Serializable{

    @Id
    @Column(name = "Id", length = 20, nullable = false)
    private Long Id;

    @Column(name = "Product_name", nullable = false)
    private String Product_name;

    @Column(name = "Product_description", nullable = true)
    private String Product_description;

    @Lob
    @Column(name = "Product_image", length = Integer.MAX_VALUE, nullable = true)
    private byte[] product_image;

    @Column(name = "Quantity", nullable = false)
    private int Quantity;

    @Column(name = "Price", nullable = false)
    private Long Price;

    @Column(name = "Guarantee", nullable = false)
    private int Guarantee;

    @Column(name = "Brand_id", nullable = false)
    private Long Brand_id;

    public Product(){}

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

    public byte[] getProduct_image() {
        return product_image;
    }

    public void setProduct_image(byte[] product_image) {
        this.product_image = product_image;
    }

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int quantity) {
        Quantity = quantity;
    }

    public Long getPrice() {
        return Price;
    }

    public void setPrice(Long price) {
        Price = price;
    }

    public int getGuarantee() {
        return Guarantee;
    }

    public void setGuarantee(int guarantee) {
        Guarantee = guarantee;
    }

    public Long getBrand_id() {
        return Brand_id;
    }

    public void setBrand_id(Long brand_id) {
        Brand_id = brand_id;
    }
}