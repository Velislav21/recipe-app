import PopularRecipeItem from "./PopularRecipeItem";
import styles from "./PopularRecipes.module.css";
import { Recipe } from "../../types/recipes";

type PopularRecipesProps = {
    popularRecipes: Recipe[];
};

export default function PopularRecipes({
    popularRecipes,
}: PopularRecipesProps) {
    return (
        <section className={styles["popular-recipes-section"]}>
            <h1>Popular Recipes</h1>

            <div className={styles["popular-recipes-container"]}>
                {popularRecipes.map((recipe) => (
                    <PopularRecipeItem key={recipe.id} {...recipe} />
                ))}
            </div>
        </section>
    );
}
