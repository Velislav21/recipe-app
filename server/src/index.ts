import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import axiosClient from "./axiosInstance.js";
import { AxiosError } from "axios";

import { Recipes } from "./types/recipes.js";

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
        const response = await axiosClient.get<Recipes>(
            "/recipes/random/?number=7"
        );
        res.status(200).json({
            featuredRecipes: response.data.recipes.splice(0, 4),
            popularRecipes: response.data.recipes,
        });
    } catch (error) {
        console.log(error) //!TODO fix this
    }
});

app.get("/recipe/:recipeId", (req, res) => {});
app.get("/category/:category", (req, res) => {});

app.listen(8080, () =>
    console.log(`Server is listening on http://localhost:${8080}`)
); // !TODO .env ??
