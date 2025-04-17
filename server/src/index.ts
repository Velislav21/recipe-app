import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";
const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);  

app.use(express.json());

app.get("/", (req, res) => {
    axios
        .get("https://ss-server-731733900032.europe-west4.run.app/shoes")
        .then((result) => {
            console.log(result.data);
        })
        .finally(() => console.log("request finished"))
    res.send({ message: "works" });
});

app.get("/recipe/:recipeId", (req, res) => {});
app.get("/category/:category", (req, res) => {});

app.listen(8080, () =>
    console.log(`Server is listening on http://localhost:${8080}`)
); // !TODO .env ??
