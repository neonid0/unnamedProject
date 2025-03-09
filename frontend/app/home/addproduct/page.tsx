"use client";
import { useState } from "react";
import axios from "axios";

// There is an issue with request content
// The request content is not being sent to the server
// seems normal on network layer, altough.
export default function Addproduct() {
    const [product, setProduct] = useState({
        productName: "",
        productBrand: "",
        productDesc: "",
        productPrice: "",
        productCategory: "",
        productQuantity: "",
        productReleaseDate: "",
        productAvailable: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        fetch("http://localhost:8000/api/products", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product }),
        })
            .then((event) => event.json())
            .then((data) => console.log("Product created:", data))
            .catch((error) => console.error("Error:", error));


        // axios
        //     .post("http://localhost:8000/api/products", {
        //         headers: {
        //             "Accept": "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ product }),
        //     })
        //     .then((response) => {
        //         console.log("Product added successfully:", response.data);
        //     })
        //     .catch((error) => {
        //         console.error("Error adding product:", error);
        //     });
    };

    const getHandler = e => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                console.log(response.data);
                console.log("Products getted out");
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
    }




    return (
        <div className="container">
            <div className="center-container">
                <form className="row g-3 pt-5" onSubmit={submitHandler}>
                    <div className="col-md-6">
                        <label className="form-label">
                            <h6>Name</h6>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            onChange={handleInputChange}
                            value={product.productName}
                            name="productName"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">
                            <h6>Brand</h6>
                        </label>
                        <input
                            type="text"
                            name="productBrand"
                            placeholder="Enter your Brand"
                            value={product.productBrand}
                            onChange={handleInputChange}
                            id="productBrand"
                        />
                    </div>
                    <div className="col-12">
                        <label className="form-label">
                            <h6>Description</h6>
                        </label>
                        <input
                            type="text"
                            placeholder="Add product description"
                            value={product.productDesc}
                            name="productDesc"
                            onChange={handleInputChange}
                            id="productDesc"
                        />
                    </div>
                    <div className="col-5">
                        <label className="form-label">
                            <h6>Price</h6>
                        </label>
                        <input
                            type="number"
                            placeholder="Eg: $1000"
                            onChange={handleInputChange}
                            value={product.productPrice}
                            name="productPrice"
                            id="productPrice"
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">
                            <h6>Category</h6>
                        </label>
                        <select
                            value={product.productCategory}
                            onChange={handleInputChange}
                            name="productCategory"
                            id="productCategory"
                        >
                            <option value="">Select category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Toys">Toys</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Car">Car</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">
                            <h6>Stock Quantity</h6>
                        </label>
                        <input
                            type="number"
                            placeholder="Stock Remaining"
                            onChange={handleInputChange}
                            value={product.productQuantity}
                            name="productQuantity"
                            // value={`${stockAlert}/${stockQuantity}`}
                            id="productQuantity"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">
                            <h6>Release Date</h6>
                        </label>
                        <input
                            type="date"
                            value={product.productReleaseDate}
                            name="productReleaseDate"
                            onChange={handleInputChange}
                            id="productReleaseDate"
                        />
                    </div>
                    {/* <input className='image-control' type="file" name='file' onChange={(e) => setProduct({...product, image: e.target.files[0]})} />
    <button className="btn btn-primary" >Add Photo</button>  */}
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="productAvailable"
                                id="gridCheck"
                                checked={product.productAvailable}
                                onChange={(e) =>
                                    setProduct({ ...product, productAvailable: e.target.checked })
                                }
                            />
                            <label className="form-check-label">Product Available</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        // onClick={submitHandler}
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <button onClick={getHandler}>Get</button>
            </div>
        </div>
    );
}
