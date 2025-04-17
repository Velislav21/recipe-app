import { Link } from "react-router";

import styles from "./Category.module.css";
import { recipeCategory } from "../../../types/recipeCategory";

export default function Category({ category, icon }: recipeCategory) {
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
