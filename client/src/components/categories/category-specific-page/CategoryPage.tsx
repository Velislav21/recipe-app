import { useParams } from "react-router";
import { useRecipesByCategory } from "../../../hooks/recipes/useRecipesByCategory";
import FeaturedRecipeItem from "../../featured-recipes/FeaturedRecipeItem";
import RecipeHeader from "../../recipe-details/details-header/RecipeDetailsHeader";

import styles from "./CategoryPage.module.css";
import LoadMoreBtn from "../../ui/load-more-btn/LoadMoreBtn";

export default function CategoryPage() {
    const { category } = useParams<{ category: string }>();
    const {
        data,
        isError,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useRecipesByCategory(category);

    const allRecipes = data?.pages.flatMap((page) => page?.results || []) || [];

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error loading recipes: {error.message}</div>
            ) : data ? (
                <>
                    <RecipeHeader image={allRecipes[0].image} />
                    <main>
                        <section className={styles["similar-recipes-section"]}>
                            <h1>Category based recipes</h1>
                            <div
                                className={styles["similar-recipes-container"]}
                            >
                                {allRecipes.map((recipe) => (
                                    <FeaturedRecipeItem
                                        key={recipe.id}
                                        id={recipe.id}
                                        image={recipe.image}
                                        readyInMinutes={recipe.readyInMinutes}
                                        servings={recipe.servings}
                                        title={recipe.title}
                                    />
                                ))}
                            </div>
                            <LoadMoreBtn
                                fetchNextPage={fetchNextPage}
                                hasNextPage={hasNextPage}
                                isFetchingNextPage={isFetchingNextPage}
                            />
                        </section>
                    </main>
                </>
            ) : null}
        </>
    );
}
