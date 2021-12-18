package unfame.springboot.finalcntt.service.orders;

import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import unfame.springboot.finalcntt.entity.Account;
import unfame.springboot.finalcntt.entity.Orders;
import unfame.springboot.finalcntt.entity.Product;
import unfame.springboot.finalcntt.entity.User;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.repository.OrdersRepository;
import unfame.springboot.finalcntt.repository.ProductRepository;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@Component
public class OrdersServiceImpl implements OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private ProductRepository productRepository;

    //Tiến hành thanh toán thì lưu vào order (id product + số lượng)
    @Override
    public HashMap<String, String> boughtProduct(Long Product_id, Integer quantity){
        if(Long.parseLong(Integer.toString(quantity)) > productRepository.findProductById(Product_id).getQuantity() || productRepository.findProductById(Product_id).getQuantity() == 0){
            return new HashMap<>() {{put("key", "Quantity left doesn't fit with your purchase!!!");}};
        }
        Orders orders = new Orders();
        orders.setProduct_id(Product_id);
        String updateTime = new SimpleDateFormat("dd/MM/yyyy_HH:mm:ss").format(Calendar.getInstance().getTime());
        orders.setDate(updateTime);
        orders.setQuantity(quantity);
        orders.setUser_id(GlobalVariable.IDuser);
        Long amountValue = quantity * productRepository.findProductById(Product_id).getPrice();
        orders.setAmount(amountValue);
        ordersRepository.save(orders);
        Product product =  productRepository.findProductById(Product_id);
        product.setQuantity(product.getQuantity() - quantity);
        productRepository.save(product);
        return new HashMap<>() {{put("key", "Success");}};
    }

    //Lấy ra tất cả hóa hơn thanh toán
    @Override
    public List<Orders> getAllOrders(){
        return ordersRepository.findAllOrders();
    }

    //Lấy ra hóa đơn + full tt người dùng
    @Override
    public ArrayList<HashMap<String, String>> findUserDetailOnOrders(Long Order_id){
        List<Object[]> list = ordersRepository.findUserDetailByOrder(Order_id);
        ArrayList<HashMap<String, String>> result = new ArrayList<>();

        for(int i = 0; i < list.size(); ++i){
            HashMap<String, String> map = new HashMap<>();
            Orders orders = (Orders) list.get(i)[0];
            map.put("id", Long.toString(orders.getId()));
            map.put("date", orders.getDate());
            map.put("quantity", Integer.toString(orders.getQuantity()));
            map.put("amount", Long.toString(orders.getAmount()));
            User user = (User) list.get(i)[1];
            map.put("fullname", user.getFullname());
            map.put("email", user.getEmail());
            map.put("image", user.getImage());
            map.put("birth", user.getBirth());
            map.put("gender", user.getGender());
            map.put("phone", user.getPhone());
            map.put("address", user.getAddress());
            Product product = (Product) list.get(i)[2];
            map.put("product_name", product.getProduct_name());
            map.put("product_image", product.getProduct_image());
            GlobalVariable.IDorder = -1L;
            result.add(map);
        }
        GlobalVariable.IDorder = -1L;
        return result;
    }

    //Tiến hành thanh toán thì lưu vào order (id product + số lượng)
    @Override
    public HashMap<String, String> saveOrderID(Long Id){
        GlobalVariable.IDorder = Id;
        return new HashMap<>() {{put("key", "Success");}};
    }
}
