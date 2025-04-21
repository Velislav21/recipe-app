import { ExtendedIngredients } from "../../../types/recipes";
import IngredientsItem from "./ingredients-item/IngredientsItem";
import styles from "./IngredientsList.module.css";

type IngredientsListProps = {
    ingredients: ExtendedIngredients[];
};

export default function IngredientList({ ingredients }: IngredientsListProps) {
    return (
        <div className={styles["ingredients-list"]}>
            <h2 className={styles["ingredients-list-title"]}>Ingredients</h2>
            <ul className={styles["ingredients-list-items"]}>
                {ingredients.map((ingredient) => (
                    <IngredientsItem
                        key={ingredient.id}
                        name={ingredient.name}
                        measures={ingredient.measures}
                    />
                ))}
            </ul>
        </div>
    );
}
