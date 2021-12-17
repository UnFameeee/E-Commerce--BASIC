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
    @PutMapping("/updateImage")
    public ResponseEntity<?> updateProductImage(@RequestBody Product req){
        return ResponseEntity.ok(productService.updateProductImage(req));
    }

    //Update 1 image của 1 mặt hàng
    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product req){
        return ResponseEntity.ok(productService.updateProduct(req));
    }

    //Xóa 1 mặt hàng
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Long Id){
        return ResponseEntity.ok(productService.deleteProduct(Id));
    }

    //Trả ra tất cả các mặt hàng
    @GetMapping("/all")
    public ResponseEntity<?> showAllProduct(){
        return ResponseEntity.ok(productService.getAllProduct());
    }

    @GetMapping("/singleById")
    public ResponseEntity<?> getProductById(){
        return ResponseEntity.ok(productService.getProductById());
    }

    //Trả ra tất cả các mặt hàng search theo product_name
    @GetMapping("/search")
    public ResponseEntity<?> showAllProductSearch(@RequestParam String value){
        return ResponseEntity.ok(productService.getAllProductWithSearch(value));
    }

    //Lưu IDproduct
    @PostMapping("/saveIDproduct/{id}")
    public ResponseEntity<?> saveIDproduct(@PathVariable("id") Long Id){
        return ResponseEntity.ok(productService.saveIDproduct(Id));
    }

    //Lưu IDproduct
    @GetMapping("/getIDproduct")
    public ResponseEntity<?> getIDproduct(){
        return ResponseEntity.ok(productService.getIDproduct());
    }

    //Lưu IDproduct
    @DeleteMapping("/deleteIDproduct")
    public ResponseEntity<?> deleteIDproduct(){
        return ResponseEntity.ok(productService.deleteIDproduct());
    }
}
