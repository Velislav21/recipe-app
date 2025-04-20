import { Link } from "react-router";
import styles from "./PopularRecipeItem.module.css";
import { Clock, UsersIcon } from "lucide-react";
import { Recipe } from "../../types/recipes";

export default function PopularRecipeItem({id, image, title, readyInMinutes, servings}: Recipe) {
    return (
        <Link to={`/recipe/${id}`} className={styles["recipe-container"]}>
            <div className={styles["img-container"]}>
                <img
                    src={image}
                    alt=""
                />
            </div>
            <div className={styles["recipe-details"]}>
                <p className={styles["recipe-title"]}>{title}</p>
                <p className={styles["prep-time"]}>
                    <Clock size={14} />
                    <span>{readyInMinutes} min</span>
                </p>
                <p className={styles["recipe-rating"]}>
                    <UsersIcon size={14}/>
                    <span>{servings}</span>
                </p>
            </div>
        </Link>
    );
}
