package unfame.springboot.finalcntt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unfame.springboot.finalcntt.entity.Orders;
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

    @GetMapping("/showDetailOrder")
    public ResponseEntity<?> createAccount(@RequestParam Long Order_id){
        return ResponseEntity.ok(ordersService.findUserDetailOnOrders(Order_id));
    }
}
