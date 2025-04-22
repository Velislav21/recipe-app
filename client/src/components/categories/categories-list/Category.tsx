import { Link } from "react-router";

import styles from "./Category.module.css";
import { RecipeCategory } from "../../../types/recipes";

export default function Category({ category, icon }: RecipeCategory) {
    return (
        <Link
            to={`/category/${category.toLowerCase()}`}
            className={styles["category"]}
        >
            <span className={styles["icon"]}>{icon}</span>
            <span className={styles["category"]}>{category}</span>
        </Link>
    );
}
