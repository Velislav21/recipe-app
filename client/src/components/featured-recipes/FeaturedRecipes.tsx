import FeaturedRecipesItem from "./FeaturedRecipeItem";

import styles from "./FeaturedRecipes.module.css";

export default function FeaturedRecipes() {
    return (
        <section className={styles["featured-recipes-container"]}>
            <h1>Featured Recipes</h1>
            <div>
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
                <FeaturedRecipesItem />
            </div>
        </section>
    );
}
