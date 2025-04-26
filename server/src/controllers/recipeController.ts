import { Request, Response, Router } from "express";

import { isAxiosError } from "axios";
import axiosClient from "../axiosInstance.js";

import {
    Recipes,
    RecipeDetails,
    CategoryBasedRecipes,
} from "../types/recipes.js";

const recipeController = Router();

recipeController.get("/", async (req: Request, res: Response) => {
    const searchTerm = req.query.searchTerm;
    let url = "/recipes/random/?number=7";

    if (searchTerm) {
        url += `&include-tags=${searchTerm}`;
    }

    try {
        const response = await axiosClient.get<Recipes>(url);
        res.status(200).json({
            featuredRecipes: response.data.recipes.splice(0, 4),
            popularRecipes: response.data.recipes,
        });
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 402) {
                    res.status(402).json({
                        message: "API token limit reached.",
                    });
                    return;
                }
                res.status(error.response.status).json(
                    error.response.data || {
                        message: "Error fetching from API",
                    }
                );
                return;
            }
        } else {
            res.status(500).json({ message: "Internal server error." });
            return;
        }
    }
});

recipeController.get(
    "/details/:recipeId",
    async (req: Request, res: Response) => {
        const recipeId = req.params.recipeId;

        try {
            const response = await axiosClient.get<RecipeDetails>(
                `/recipes/${recipeId}/information`
            );

            if (!response.data || typeof response.data !== "object") {
                res.status(502).json({ message: "Invalid API response" });
            }

            const filteredData: RecipeDetails = {
                id: response.data.id,
                image: response.data.image,
                title: response.data.title,
                readyInMinutes: response.data.readyInMinutes,
                servings: response.data.servings,
                analyzedInstructions: response.data.analyzedInstructions,
                extendedIngredients: response.data.extendedIngredients,
            };
            res.status(200).json(filteredData);
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 402) {
                        res.status(402).json({
                            message: "API token limit reached.",
                        });
                        return;
                    }
                    res.status(error.response.status).json(
                        error.response.data || {
                            message: "Error fetching from API",
                        }
                    );
                    return;
                }
            } else {
                res.status(500).json({ message: "Internal server error." });
                return;
            }
        }
    }
);

recipeController.get(
    "/category/:category",
    async (req: Request, res: Response) => {
        const category = req.params.category;

        const offset = parseInt((req.query.offset as string) || "0", 10);
        const number = parseInt((req.query.number as string) || "12", 10);

        try {
            const response = await axiosClient.get<CategoryBasedRecipes>(
                `/recipes/complexSearch?type=${category}&addRecipeInformation=true&offset=${offset}&number=${number}`
            );
            res.status(200).json(response.data);
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 402) {
                        res.status(402).json({
                            message: "API token limit reached.",
                        });
                        return;
                    }
                    res.status(error.response.status).json(
                        error.response.data || {
                            message: "Error fetching from API",
                        }
                    );
                    return;
                }
            } else {
                res.status(500).json({ message: "Internal server error." });
                return;
            }
        }
    }
);

export default recipeController;
