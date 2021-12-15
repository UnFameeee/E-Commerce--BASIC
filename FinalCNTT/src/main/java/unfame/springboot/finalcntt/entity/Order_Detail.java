package unfame.springboot.finalcntt.entity;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "ORDER_DETAIL")
public class Order_Detail implements Serializable{
    @Id
    @Column(name = "Id", nullable = false)
    private Long Id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Order_id", nullable = false, //
            foreignKey = @ForeignKey(name = "ORDER_DETAIL_ORD_FK"))
    private Orders orders;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Product_id", nullable = false, //
            foreignKey = @ForeignKey(name = "ORDER_DETAIL_PROD_FK"))
    private Product product;

    @Column(name = "Quanity", nullable = false)
    private int Quanity;

    @Column(name = "Price", nullable = false)
    private Long Price;

    //Quantity * Price = Amount
    @Column(name = "Amount", nullable = false)
    private Long Amount;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuanity() {
        return Quanity;
    }

    public void setQuanity(int quanity) {
        Quanity = quanity;
    }

    public Long getPrice() {
        return Price;
    }

    public void setPrice(Long price) {
        Price = price;
    }

    public Long getAmount() {
        return Amount;
    }

    public void setAmount(Long amount) {
        Amount = amount;
    }
}
