"use client";
import { useState } from "react";
import axios from "axios";

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
        const formData = new FormData();
        formData.append(
            "product",
            new Blob([JSON.stringify(product)], { type: "application/json" })
        );

        axios
            .post("http://localhost:8000/api/products", formData, {
                headers: {
                    "Content-Type": "form-data",
                },
            })
            .then((response) => {
                console.log("Product added successfully:", response.data);
                alert("Product added successfully");
            })
            .catch((error) => {
                console.error("Error adding product:", error);
                alert("Error adding product");
            });
    };




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
                            className="form-control"
                            placeholder="Product Name"
                            onChange={handleInputChange}
                            value={product.productName}
                            name="name"
                        />
                    </div>
                    {/* <div className="col-md-6"> */}
                    {/*     <label className="form-label"> */}
                    {/*         <h6>Brand</h6> */}
                    {/*     </label> */}
                    {/*     <input */}
                    {/*         type="text" */}
                    {/*         name="brand" */}
                    {/*         className="form-control" */}
                    {/*         placeholder="Enter your Brand" */}
                    {/*         value={product.brand} */}
                    {/*         onChange={handleInputChange} */}
                    {/*         id="brand" */}
                    {/*     /> */}
                    {/* </div> */}
                    <div className="col-12">
                        <label className="form-label">
                            <h6>Description</h6>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add product description"
                            value={product.productDesc}
                            name="description"
                            onChange={handleInputChange}
                            id="description"
                        />
                    </div>
                    <div className="col-5">
                        <label className="form-label">
                            <h6>Price</h6>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Eg: $1000"
                            onChange={handleInputChange}
                            value={product.productPrice}
                            name="price"
                            id="price"
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">
                            <h6>Category</h6>
                        </label>
                        <select
                            className="form-select"
                            value={product.productCategory}
                            onChange={handleInputChange}
                            name="category"
                            id="category"
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
                            className="form-control"
                            placeholder="Stock Remaining"
                            onChange={handleInputChange}
                            value={product.productQuantity}
                            name="stockQuantity"
                            // value={`${stockAlert}/${stockQuantity}`}
                            id="stockQuantity"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">
                            <h6>Release Date</h6>
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            value={product.productReleaseDate}
                            name="releaseDate"
                            onChange={handleInputChange}
                            id="releaseDate"
                        />
                    </div>
                    {/* <input className='image-control' type="file" name='file' onChange={(e) => setProduct({...product, image: e.target.files[0]})} />
    <button className="btn btn-primary" >Add Photo</button>  */}
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
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
            </div>
        </div>
    );
}
