"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api"; // Import the API instance
import Footer from "@/app/components/footer";

interface Product {
    productId: number;
    productName: string;
    productDesc: string;
    productPrice: number;
    productBrand: string;
    productCategory: string;
    productReleaseDate: string;
    productQuantity: number;
    productAvailable: boolean;
}

type ProductListProps = {
    products: Product[];
    product: Product;
}


export default function Home() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get<Product[]>("/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>

            <h1>Product List</h1>

            {loading ? <p>Loading...</p> : (
                <ul className="flex flex-row mx-3 p-5 rounded-2xl max-w-3xl text-[#f2f2f2] bg-[#2f2f2f] ">
                    {products.map((product) => (
                        <li className="text-nowrap mr-5" key={product.productId} >
                            <h2>Name: {product.productName}</h2>
                            <p>Description: {product.productDesc}</p>
                            <p>Category: {product.productCategory}</p>
                            <p>Brand: {product.productBrand}</p>
                            <p>Price: ${product.productPrice}</p>
                            <p>Available: {product.productAvailable ? "Yes" : "No"}</p>
                            <p>Quantity: {product.productQuantity}</p>
                            <p>Release Date: {product.productReleaseDate}</p>
                        </li>
                    ))}
                </ul>
            )}

            <Footer />

        </div>

    );
}

