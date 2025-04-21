import { Link } from "react-router";
import styles from "./FeaturedRecipeItem.module.css";
import { Clock, UsersIcon } from "lucide-react";
import { Recipe } from "../../types/recipes";
import { fallbackRecipeImage } from "../../utils/fallbackRecipeImage";

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
                alt="The image is not available"
                onError={fallbackRecipeImage}
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
