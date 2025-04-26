import { Link } from "react-router";
import styles from "./PopularRecipeItem.module.css";
import { Clock, UsersIcon } from "lucide-react";
import { Recipe } from "../../types/recipes";
import { fallbackRecipeImage } from "../../utils/fallbackRecipeImage";
import { calculateTime } from "../../utils/calculateTime";

export default function PopularRecipeItem({id, image, title, readyInMinutes, servings}: Recipe) {
    return (
        <Link to={`/recipe/${id}`} className={styles["recipe-container"]}>
            <div className={styles["img-container"]}>
                <img
                    src={image}
                    alt="The image is not available"
                    onError={fallbackRecipeImage}
                />
            </div>
            <div className={styles["recipe-details"]}>
                <p className={styles["recipe-title"]}>{title}</p>
                <p className={styles["prep-time"]}>
                    <Clock size={14} />
                    <span>{calculateTime(readyInMinutes)}</span>
                </p>
                <p className={styles["recipe-rating"]}>
                    <UsersIcon size={14}/>
                    <span>{servings}</span>
                </p>
            </div>
        </Link>
    );
}
