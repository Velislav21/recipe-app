import { useParams } from "react-router";
import { useRecipesByCategory } from "../../../hooks/recipes/useRecipesByCategory";
import FeaturedRecipesItem from "../../featured-recipes/FeaturedRecipeItem";
import RecipeHeader from "../../recipe-details/details-header/RecipeDetailsHeader";
import SearchBar from "../../search-bar/SearchBar";

import styles from "./CategoryPage.module.css";

export default function CategoryPage() {
    const { category } = useParams();

    const { data, isError, error, isLoading } = useRecipesByCategory(category);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error loading recipes: {error.message}</div>
            ) : data ? (
                <>
                    <RecipeHeader image={data.results[0].image} />
                    <main>
                        <div className={styles["search-bar-container"]}>
                            <SearchBar />
                        </div>
                        <section className={styles["similar-recipes-section"]}>
                            <h1>Category based recipes</h1>
                            <div className={styles["similar-recipes-container"]}>

                            </div>
                        </section>
                    </main>
                </>
            ) : null}
        </>
    );
}
