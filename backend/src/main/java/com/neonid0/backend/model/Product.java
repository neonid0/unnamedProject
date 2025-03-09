package com.neonid0.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

// Attributes are a lot than the necessary for now
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    private String productName;
    private String productDesc;
    private String productCategory;
    private String productBrand;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private Date productReleaseDate;

    private boolean productAvailable;
    private double ProductPrice;
    private int ProductQuantity;



}
