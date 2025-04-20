import { useEffect } from "react";
import CategoriesList from "../categories/categories-list/CategoriesList";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";

import axios from "axios";
export default function Home() {
    useEffect(() => {
        axios.get("http://localhost:8080").then((response) => console.log(response.data))
    }, [])
    return (
        <>
            <HomeHeader />
            <main>
                <FeaturedRecipes />
                <CategoriesList />
                <PopularRecipes />
            </main>
        </>
    );
}
