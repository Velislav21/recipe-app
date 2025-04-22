import Category from "./Category";

import styles from "./CategoriesList.module.css";

import { v4 as uuidv4 } from "uuid";
import { RecipeCategory } from "../../../types/recipes";

const categories: RecipeCategory[] = [
    {
        id: uuidv4(),
        category: "Breakfast",
        icon: "🍳",
    },
    {
        id: uuidv4(),
        category: "Salad",
        icon: "🥗",
    },
    {
        id: uuidv4(),
        category: "Soup",
        icon: "🍜",
    },
    {
        id: uuidv4(),
        category: "Bread",
        icon: "🍞",
    },
    {
        id: uuidv4(),
        category: "Snack",
        icon: "🍿",
    },
    {
        id: uuidv4(),
        category: "Drink",
        icon: "🍹",
    },
    {
        id: uuidv4(),
        category: "Dessert",
        icon: "🧁",
    },
];

export default function CategoriesList() {
    return (
        <section className={styles["category-section"]}>
            <h1>Categories</h1>

            <div className={styles["categories-container"]}>
                {categories.map((category) => (
                    <Category key={category.id} {...category} />
                ))}
            </div>
        </section>
    );
}
