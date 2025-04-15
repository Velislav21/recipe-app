import FeaturedRecipesItem from "./FeaturedRecipeItem";

import styles from "./FeaturedRecipes.module.css";

export default function FeaturedRecipes() {
    return (
        <section className={styles["featured-recipes-section"]}>
            <h1>Featured Recipes</h1>
            <div className={styles["featured-recipes-container"]}>
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
            </div>
        </section>
    );
}
