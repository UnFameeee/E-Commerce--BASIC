package unfame.springboot.finalcntt.entity;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import javax.persistence.*;

@Component
@Entity(name = "RATING")
@Table(name = "RATING")
public class Rating implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long Id;

    @Column(name = "Product_id")
    private Long Product_id;

    @Column(name = "Point")
    private Integer Point;

    @Column(name = "Comment")
    private String Comment;

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

    public int getPoint() {
        return Point;
    }

    public void setPoint(int point) {
        Point = point;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }
}
