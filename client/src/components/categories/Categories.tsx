import styles from "./Categories.module.css";
import { recipeCategory } from "../../types/recipeCategory";

const categories: recipeCategory[] = [
    {
        id: 1,
        category: "Breakfast",
        icon: "🍳",
    },
    {
        id: 2,
        category: "Lunch",
        icon: "🥪",
    },
    {
        id: 3,
        category: "Dinner",
        icon: "🍝",
    },
    {
        id: 4,
        category: "Dessert",
        icon: "🧁",
    },
    {
        id: 5,
        category: "Drinks",
        icon: "🍹",
    },
    {
        id: 6,
        category: "Snacks",
        icon: "🍿",
    },
];

export default function Categories() {
    return (
        <section className={styles["category-section"]}>
            <h1>Categories</h1>

            <div className={styles["categories-container"]}>
                {categories.map((category) => (
                    <button key={category.id} className={styles["category"]}>
                        <span className={styles["icon"]}>{category.icon}</span>
                        <span>{category.category}</span>
                    </button>
                ))}
            </div>
            
        </section>
    );
}
