import { Recipe } from "../../types/recipes";
import FeaturedRecipeItem from "./FeaturedRecipeItem";

import styles from "./FeaturedRecipes.module.css";

type FeaturedRecipesProps = {
    featuredRecipes: Recipe[];
};

export default function FeaturedRecipes({
    featuredRecipes,
}: FeaturedRecipesProps) {
    return (
        <section className={styles["featured-recipes-section"]}>
            <h1>Featured Recipes</h1>
            <div className={styles["featured-recipes-container"]}>

                {featuredRecipes.map((recipe) => (
                    <FeaturedRecipeItem key={recipe.id} {...recipe}/>
                ))}

            </div>
        </section>
    );
}
