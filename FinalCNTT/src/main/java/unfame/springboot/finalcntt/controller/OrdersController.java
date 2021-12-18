package unfame.springboot.finalcntt.controller;

import org.apache.tomcat.jni.Global;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unfame.springboot.finalcntt.entity.Orders;
import unfame.springboot.finalcntt.global.GlobalVariable;
import unfame.springboot.finalcntt.service.orders.OrdersService;

@RestController
@RequestMapping(value = "/order")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping("/create")
    public ResponseEntity<?> createAccount(@RequestBody Orders req){
        return ResponseEntity.ok(ordersService.boughtProduct(req.getProduct_id(), req.getQuantity()));
    }

    @GetMapping("/showAllOrder")
    public ResponseEntity<?> showAllOrder(){
        return ResponseEntity.ok(ordersService.getAllOrders());
    }

    @PostMapping("/saveOrderID/{id}")
    public ResponseEntity<?> saveOrderID(@PathVariable("id") Long Id){
        return ResponseEntity.ok(ordersService.saveOrderID(Id));
    }

    @GetMapping("/showDetailOrder")
    public ResponseEntity<?> createAccount(){
        return ResponseEntity.ok(ordersService.findUserDetailOnOrders(GlobalVariable.IDorder));
    }
}
