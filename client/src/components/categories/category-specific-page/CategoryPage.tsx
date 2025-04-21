import FeaturedRecipesItem from "../../featured-recipes/FeaturedRecipeItem";
import RecipeHeader from "../../recipe-details/details-header/RecipeDetailsHeader";
import SearchBar from "../../search-bar/SearchBar";

import styles from "./CategoryPage.module.css";

export default function CategoryPage() {
    return (
        <>
            <RecipeHeader />
            <main>
                <div className={styles["search-bar-container"]}>
                    <SearchBar />
                </div>
                <section className={styles["similar-recipes-section"]}>
                    <h1>Category based recipes</h1>
                    <div className={styles["similar-recipes-container"]}>
                        {/* <FeaturedRecipesItem />
                        <FeaturedRecipesItem />
                        <FeaturedRecipesItem />
                        <FeaturedRecipesItem />
                        <FeaturedRecipesItem /> */}
                    </div>
                </section>
            </main>
        </>
    );
}
