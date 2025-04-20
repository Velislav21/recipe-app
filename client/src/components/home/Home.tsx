import { useEffect, useState } from "react";
import CategoriesList from "../categories/categories-list/CategoriesList";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";

import axios from "axios";

import { Recipes } from "../../types/recipes";
export default function Home() {
    
    const [recipes, setRecipes] = useState<Recipes>();
    useEffect(() => {
        axios
            .get("http://localhost:8080")
            .then((response) => setRecipes(response.data));
    }, []);
    console.log(recipes);
    return (
        <>
            <HomeHeader />
            <main>
                {!recipes ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <FeaturedRecipes
                            featuredRecipes={recipes.featuredRecipes}
                        />
                        <CategoriesList />
                        <PopularRecipes />
                    </>
                )}
            </main>
        </>
    );
}
