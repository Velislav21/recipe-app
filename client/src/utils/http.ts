import axiosClient from "../axiosInstance";
import { Recipes } from "../types/recipes";

export async function fetchHomeRecipes() {

    try {
        const response = await axiosClient.get<Recipes>("/recipes");
        return response.data;
    } catch (err) {
        console.log(err) //!TODO: fix this
    }
}