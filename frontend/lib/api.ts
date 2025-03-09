import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api", // Ensure this matches your backend
    headers: {
        "Content-Type": "application/json",
    },
});

// Remove Authorization header (optional, usually not needed)
delete API.defaults.headers.common["Authorization"];

export default API;

