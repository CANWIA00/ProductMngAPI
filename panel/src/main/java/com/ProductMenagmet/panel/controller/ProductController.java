package com.ProductMenagmet.panel.controller;

import com.ProductMenagmet.panel.model.Product;
import com.ProductMenagmet.panel.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
        
    }
    
    
    @GetMapping
    public List<Product> getAllproduct(){
        return productService.getAllProduct();
    }
    
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id){
        return ResponseEntity.ok(productService.getProductById(id));
    }
    
    @PutMapping("{id}")
    public ResponseEntity<Product> updateProductById(@PathVariable("id")Long id,@RequestBody Product product){

        return ResponseEntity.ok(productService.updateProductById(id,product));
    }
    
    @PostMapping
    public ResponseEntity<Product> createProductById(@RequestBody Product product){

        return ResponseEntity.ok(productService.createProductById(product));
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable("id") Long id){
        productService.deleteProductById(id);
        return ResponseEntity.ok("Deleted");

    }
}
