package unfame.springboot.finalcntt.dto;

import org.springframework.stereotype.Component;

@Component
public class Payment_MethodDTO {
    private Long payment_id;
    private String method;

    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }
}
