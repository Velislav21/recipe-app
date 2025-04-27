import { Recipe } from "../../types/recipes";
import ErrorMessage from "../errors/ErrorMessage";
import FeaturedRecipeItem from "./FeaturedRecipeItem";

import styles from "./FeaturedRecipes.module.css";

type FeaturedRecipes = {
    featuredRecipes: Recipe[];
};

export default function FeaturedRecipes({ featuredRecipes }: FeaturedRecipes) {
    return (
        <section className={styles["featured-recipes-section"]}>
            <h1>Featured Recipes</h1>
            <div className={styles["featured-recipes-container"]}>
                {
                featuredRecipes.length >= 1
                ?
                (
                    featuredRecipes.map((recipe) => (
                        <FeaturedRecipeItem key={recipe.id} {...recipe} />))
                )
                :
                <ErrorMessage>No recipes found!</ErrorMessage>
                }
            </div>
        </section>
    );
}