package unfame.springboot.finalcntt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import unfame.springboot.finalcntt.entity.Product;
import unfame.springboot.finalcntt.service.product.ProductService;

@RestController
@RequestMapping(value = "/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    //Tạo 1 mặt hàng mới
    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Product req){
        return ResponseEntity.ok(productService.createProduct(req));
    }

    //Update 1 mặt hàng
    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product req){
        return ResponseEntity.ok(productService.updateProduct(req));
    }

    //Xóa 1 mặt hàng
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteProduct(@RequestBody Product req){
        return ResponseEntity.ok(productService.deleteProduct(req));
    }

    //Trả ra tất cả các mặt hàng
    @PostMapping("/all")
    public ResponseEntity<?> showAllProduct(){
        return ResponseEntity.ok(productService.getAllProduct());
    }

    //Trả ra tất cả các mặt hàng search theo product_name
    @PostMapping("/search")
    public ResponseEntity<?> showAllProductSearch(@RequestParam String value){
        return ResponseEntity.ok(productService.getAllProduct(value));
    }
}
