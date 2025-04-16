import RecipeHeader from "../../recipe-details/details-header/RecipeDetailsHeader";
import SearchBar from "../../search-bar/SearchBar";

import styles from "./CategoryPage.module.css"

export default function CategoryPage() {
    return (
        <>
            <RecipeHeader />
            <main>
                <div className={styles["search-bar-container"]}>
                    <SearchBar />
                </div>
                <section className={styles["similar-recipes-container"]}>
                    <article className={styles["similar-recipe"]}>

                    </article>
                </section>
            </main>
        </>
    );
}
