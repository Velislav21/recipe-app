import styles from "./CategoriesList.module.css";
import { recipeCategory } from "../../types/recipeCategory";
import { Link } from "react-router";

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

export default function CategoriesList() {
    return (
        <section className={styles["category-section"]}>
            <h1>Categories</h1>

            <div className={styles["categories-container"]}>
                {categories.map((category) => (
                    <Link to="#" key={category.id} className={styles["category"]}>
                            <span className={styles["icon"]}>
                                {category.icon}
                            </span>
                            <span className={styles["category"]}>{category.category}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
