import PopularRecipeItem from "./PopularRecipeItem";
import styles from "./PopularRecipes.module.css";
import { Recipe } from "../../types/recipes";
import ErrorMessage from "../errors/ErrorMessage";

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
                {
                popularRecipes.length >= 1
                ?
                (
                    popularRecipes.map((recipe) => (
                        <PopularRecipeItem key={recipe.id} {...recipe} />))
                )
                :
                <ErrorMessage>No recipes found!</ErrorMessage>
                }
            </div>
        </section>
    );
}
