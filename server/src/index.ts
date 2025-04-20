import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import axiosClient from "./axiosInstance.js";
import { AxiosError } from "axios";

const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    try {
        const result = await axiosClient.get("/recipes/random/?number=7")
        res.status(200).json(result.data)
    } catch (err) {}
});

app.get("/recipe/:recipeId", (req, res) => {});
app.get("/category/:category", (req, res) => {});

app.listen(8080, () =>
    console.log(`Server is listening on http://localhost:${8080}`)
); // !TODO .env ??
