package unfame.springboot.finalcntt.entity;

import unfame.springboot.finalcntt.entity.key.RatingKey;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "RATING")
public class Rating implements Serializable{
    @EmbeddedId
    private RatingKey Id;

    @Column(name = "Point", nullable = false)
    private int Point;

    @Column(name = "Comment", nullable = false)
    private String Comment;

    public RatingKey getId() {
        return Id;
    }

    public void setId(RatingKey id) {
        Id = id;
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
