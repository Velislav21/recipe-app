import { Request, Response, Router } from "express";

import axiosClient from "../axiosInstance.js";

import { Recipes } from "../types/recipes.js";


const recipeController = Router();

recipeController.get("/", async (req: Request, res: Response) => {
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

recipeController.get("/recipe/:recipeId", (req, res) => {});
recipeController.get("/category/:category", (req, res) => {});

export default recipeController;