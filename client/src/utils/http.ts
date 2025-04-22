import axiosClient from "../axiosInstance";
import { CategoryBasedRecipes, RecipeDetails, Recipes } from "../types/recipes";

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

export async function fetchRecipesByCategory(category: string) {
    try {
        const response = await axiosClient.get<CategoryBasedRecipes>(`/recipes/category/${category}`);
        return response.data;
    } catch (err) {
        console.log(err);
    };
}