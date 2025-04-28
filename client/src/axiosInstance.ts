import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://recipes-server-419272414026.europe-west4.run.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;