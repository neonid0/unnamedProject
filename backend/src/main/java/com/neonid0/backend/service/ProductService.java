package com.neonid0.backend.service;

import com.neonid0.backend.model.Product;
import com.neonid0.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository repository;

    public List<Product> getProducts() {

        return repository.findAll();
    }

    public Product getProductById(int productId) {

        return repository.findById(productId).orElse(null);
    }

    public Product addProduct(Product product) {

        for (Product repoProduct : repository.findAll()) {
            if (product.getProductName().equals(repoProduct.getProductName())) {
                return null;
            }
        }

        repository.save(product);
        return product;
    }

    public Product updateProduct(Product product) {

        for (Product product1: repository.findAll()) {
            if (product.getProductName().equals(product1.getProductName())) {
                return repository.save(product);
            }
        }

        return null;
    }

    public Product deleteProduct(int productId) {

        for (Product product : repository.findAll()) {
            if (product.getProductId() == productId) {
                repository.delete(product);
                return product;
            }
        }

        return null;
    }

    public List<Product> searchProduct(String keyword) {
        return repository.searchProduct(keyword);
    }
}
