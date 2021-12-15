package unfame.springboot.finalcntt.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "category")
public class Category implements Serializable {
    @Id
    @Column(name="Id")
    private Long Id;

    @Column(name = "Category_name")
    private String Category_name;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getCategory_name() {
        return Category_name;
    }

    public void setCategory_name(String category_name) {
        Category_name = category_name;
    }
}
