import axios from "axios";

// might be this handler is structered wrong 
// but this is not the worst problem in this project
const API = axios.create({
    baseURL: "http://localhost:8000/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
