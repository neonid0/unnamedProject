package com.neonid0.backend.controller;

import com.neonid0.backend.model.Product;
import com.neonid0.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// Need to handle the HTTP requests and responses better
@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {

        List<Product> list = service.getProducts();

        if (list != null) {
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable int productId) {

        Product product = service.getProductById(productId);
        if (product != null)
            return ResponseEntity.ok(product);
        else
            return ResponseEntity.notFound().build();
    }

    @PostMapping("/products")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {

        if (product.equals(new Product())) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        Product response = service.addProduct(product);

        if (response != null) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(null , HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/products")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {

        if (product.equals(new Product())) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        Product item = service.updateProduct(product);

        if (item != null) {
            return new ResponseEntity<>(item, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<Product> deleteProduct(@PathVariable int productId) {

        if (productId == 0) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        Product product = service.deleteProduct(productId);

        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/products/search")
    public List<Product> searchProduct(@RequestParam String keyword) {
        return service.searchProduct(keyword);
    }

}
