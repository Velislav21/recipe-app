import { Link } from "react-router";
import styles from "./FeaturedRecipeItem.module.css";
import { Clock, UsersIcon } from "lucide-react";

export default function FeaturedRecipesItem() {
    return (
        <Link to="#" className={styles["featured-recipe-item"]}>
            <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
            />
            <div className={styles["recipe-details"]}>
                <h3>Some pasta on the picture</h3>
                <div>
                    <p>
                        <Clock size={16} />
                        <span>25 min</span>
                    </p>
                    <p>
                        <UsersIcon size={16} />
                        <span>2 servings</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}
