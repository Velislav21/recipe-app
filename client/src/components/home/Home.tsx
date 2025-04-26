import { useState } from "react";

import CategoriesList from "../categories/categories-list/CategoriesList";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";
import SkeletonLoader from "../loader/SkeletonLoader";

import { useHomeRecipes } from "../../hooks/recipes/useHomeRecipes";
import ErrorMessage from "../errors/ErrorMessage";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading, isError, error } = useHomeRecipes(searchTerm);

    const handleSearchSubmit = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    return (
        <>
            <HomeHeader onSearchSubmit={handleSearchSubmit}/> {/* Definetly not the best solution */}
            <main>
                {isLoading ? (
                    <SkeletonLoader/>
                ) : isError ? (
                    <ErrorMessage>Error occured: {error.message}</ErrorMessage>
                ) : data ? (
                    <>
                        <FeaturedRecipes
                            featuredRecipes={data.featuredRecipes}
                        />
                        <CategoriesList />
                        <PopularRecipes popularRecipes={data.popularRecipes} />
                    </>
                ) : null}
            </main>
        </>
    );
}
