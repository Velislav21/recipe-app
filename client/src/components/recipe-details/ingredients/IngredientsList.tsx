import IngredientsItem from "./ingredients-item/IngredientsItem";
import styles from "./IngredientsList.module.css"

export default function IngredientList() {
    return (
        <div className={styles["ingredients-list"]}>
            <h2 className={styles["ingredients-list-title"]}>Ingredients</h2>
            <ul className={styles["ingredients-list-items"]}>
                <IngredientsItem/>
                <IngredientsItem/>
                <IngredientsItem/>
                <IngredientsItem/>
                <IngredientsItem/>
                <IngredientsItem/>
            </ul>
        </div>
    );
}
