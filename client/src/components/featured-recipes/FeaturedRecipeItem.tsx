import { Link } from "react-router";
import styles from "./FeaturedRecipeItem.module.css";
import { Clock, UsersIcon } from "lucide-react";
import { Recipe } from "../../types/recipes";

export default function FeaturedRecipeItem({
    id,
    image,
    readyInMinutes,
    servings,
    title,
}: Recipe) {
    return (
        <Link to={`/recipe/${id}`} className={styles["featured-recipe-item"]}>
            <img 
                src={image} 
                alt=""
            />
            <div className={styles["recipe-details"]}>
                <h3>{title}</h3>
                <div>
                    <p>
                        <Clock size={16} />
                        <span>{readyInMinutes} min</span>
                    </p>
                    <p>
                        <UsersIcon size={16} />
                        <span>{servings} servings</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}
