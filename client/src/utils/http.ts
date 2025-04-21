import axiosClient from "../axiosInstance";
import { RecipeDetails, Recipes } from "../types/recipes";

export async function fetchHomeRecipes() {
    try {
        const response = await axiosClient.get<Recipes>("/recipes");
        return response.data;
    } catch (err) {
        console.log(err) //!TODO: fix this
    };
};

export async function fetchRecipeDetails(recipeId: string) {
    try {
        const response = await axiosClient.get<RecipeDetails>(`/recipes/details/${recipeId}`);
        return response.data;
    } catch (err) {
        console.log(err);
    };
};