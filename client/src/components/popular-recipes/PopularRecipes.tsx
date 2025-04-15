import PopularRecipeItem from "./PoularRecipeItem";
import styles from "./PopularRecipes.module.css";

export default function PopularRecipes() {
    return (
        <section className={styles["popular-recipes-section"]}>
            <h1>Popular Recipes</h1>

            <div className={styles["popular-recipes-container"]}>
                <PopularRecipeItem />
                <PopularRecipeItem />
            </div>
        </section>
    );
}