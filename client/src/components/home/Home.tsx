import CategoriesList from "../categories/categories-list/CategoriesList";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";

import { useHomeRecipes } from "../../hooks/recipes/useHomeRecipes";

export default function Home() {

    const { data, isLoading, isError, error } = useHomeRecipes();

    return (
        <>
            <HomeHeader />
            <main>
                {
                    isLoading ? (
                        <div>Loading...</div> 
                    ) : isError ? ( 
                        <div>Error loading recipes: {error?.message}</div>
                    ) : data ? (
                        <>
                            <FeaturedRecipes
                                featuredRecipes={data.featuredRecipes}
                            />
                            <CategoriesList />
                            <PopularRecipes
                                popularRecipes={data.popularRecipes}
                            />
                        </>
                    ) : null 
                }
            </main>
        </>
    );
}
