import Category from "./Category";
import { recipeCategory } from "../../../types/recipeCategory";
import styles from "./CategoriesList.module.css";

import { v4 as uuidv4 } from "uuid";

const categories: recipeCategory[] = [
    {
        id: uuidv4(),
        category: "Breakfast",
        icon: "🍳",
    },
    {
        id: uuidv4(),
        category: "Lunch",
        icon: "🥪",
    },
    {
        id: uuidv4(),
        category: "Dinner",
        icon: "🍝",
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
        category: "Snacks",
        icon: "🍿",
    },
    {
        id: uuidv4(),
        category: "Drinks",
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
