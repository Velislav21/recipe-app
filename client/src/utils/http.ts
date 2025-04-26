import axiosClient from "../axiosInstance";
import { isAxiosError } from "axios";
import { CategoryBasedRecipes, RecipeDetails, Recipes } from "../types/recipes";

export async function fetchHomeRecipes(searchTerm: string) {
    const config = {
        params: {
            searchTerm
        }
    }
    try {
        const response = await axiosClient.get<Recipes>("/recipes", config);
        return response.data;
    } catch (err) {
        if (isAxiosError(err)) {
            if (err.response) {
                throw new Error(err.response.data.message)
            }
            throw new Error(err.message)
        }
    };
};

export async function fetchRecipeDetails(recipeId: string) {
    try {
        const response = await axiosClient.get<RecipeDetails>(`/recipes/details/${recipeId}`);
        return response.data;
    } catch (err) {
        if (isAxiosError(err)) {
            if (err.response) {
                throw new Error(err.response.data.message)
            }
            throw new Error(err.message)
        }
    };
};

export async function fetchRecipesByCategory(category: string, offset = 0, number = 12) {

    const config = {
        params: {
            offset,
            number
        }
    }

    try {
        const response = await axiosClient.get<CategoryBasedRecipes>(`/recipes/category/${category}`, config);
        return response.data;
    } catch (err) {
        if (isAxiosError(err)) {
            if (err.response) {
                throw new Error(err.response.data.message)
            }
            throw new Error(err.message)
        }
    };
}