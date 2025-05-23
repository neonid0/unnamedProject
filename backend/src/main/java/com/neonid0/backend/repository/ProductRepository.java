package com.neonid0.backend.repository;

import com.neonid0.backend.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    // I dont know how to implement this search feature to frontend but this working for now
    @Query("SELECT p from Product p WHERE " +
            "LOWER(p.productName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.productDesc) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.productCategory) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.productBrand) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Product> searchProduct(String keyword);
}
