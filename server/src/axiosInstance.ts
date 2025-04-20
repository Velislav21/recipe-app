import axios from "axios";

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

const axiosClient = axios.create({
    baseURL: "https://api.spoonacular.com",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": SPOONACULAR_API_KEY,
    },
});
export default axiosClient;