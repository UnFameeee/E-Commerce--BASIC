package unfame.springboot.finalcntt.entity.key;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class RatingKey implements Serializable{
    @Column(name = "Product_id", nullable = false)
    private Long Product_id;

    @Column(name = "Category_id", nullable = false)
    private Long Category_id;

    @Column(name = "Brand_id", nullable = false)
    private Long Brand_id;

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
}
