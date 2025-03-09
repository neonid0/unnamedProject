"use client"; // Ensures this runs on the client side

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const product = {
        productName: "Porsche 911",
        productBrand: "Porsche",
        productDesc: "A sports car",

        productCategory: "Car",

        productQuantity: "1",
        productReleaseDate: "2022-01-01",
        productAvailable: true,
        productPrice: "100000",
    });



    // Fetch products when the component mounts
    // I dont know is axios better than standart http fetching?
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/products");
            setProducts(res.data);
        } catch (err) {
            setError("Error fetching products");
            console.error(err);
        }
    };

    const addProduct = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:8000/api/products", { product });

            setProducts((prev) => [...prev, res.data]); // Add new product to UI
        } catch (err) {
            setError("Error adding product");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Products</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
                onClick={addProduct}
                disabled={loading}
            >
                {loading ? "Adding..." : "Add Product"}
            </button>
            <ul>
                {products.map((product: any) => (
                    <li key={product.productId}>
                        {product.productName} - ${product.productBrand} -
                        {product.productDesc}  - {product.productCategory}

                    </li>
                ))}
            </ul>
        </div>
    );
}

