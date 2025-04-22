import { Request, Response, Router } from "express";

import axiosClient from "../axiosInstance.js";

import { Recipes, RecipeDetails } from "../types/recipes.js";


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

recipeController.get("/details/:recipeId", async (req: Request, res: Response) => {
    const recipeId = req.params.recipeId
 
    try {
        const response = await axiosClient.get<RecipeDetails>(`/recipes/${recipeId}/information`);

        if (!response.data || typeof response.data !== "object") {
            res.status(502).json({ message: "Invalid API response"})
        }

        const filteredData: RecipeDetails = {
            id: response.data.id,
            image: response.data.image,
            title: response.data.title,
            readyInMinutes: response.data.readyInMinutes,
            servings: response.data.servings,
            analyzedInstructions: response.data.analyzedInstructions,
            extendedIngredients: response.data.extendedIngredients,
        }
        res.status(200).json(filteredData);
    } catch (error) {
        console.log(error) //!TODO fix this
    }
});

recipeController.get("/category/:category", async (req: Request, res: Response) => {

    const category = req.params.recipeId;
    try {
        const response = await axiosClient.get<RecipeDetails[]>(`/recipes/complexSearch?type=${category}&addRecipeInformation=true`);
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error) //!TODO fix this
    }
});

export default recipeController;