import { Link } from "react-router";
import styles from "./PopularRecipeItem.module.css";
import { Clock, Star } from "lucide-react";

export default function PopularRecipeItem() {
    return (
        <Link to="#" className={styles["recipe-container"]}>
            <div className={styles["img-container"]}>
                <img
                    src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt=""
                />
            </div>
            <div className={styles["recipe-details"]}>
                <p className={styles["recipe-title"]}>Some Pasta</p>
                <p className={styles["prep-time"]}>
                    <Clock size={14} />
                    <span>25 min</span>
                </p>
                <p className={styles["recipe-rating"]}>
                    <Star size={14} fill="#facc15" color="#facc15" />
                    <span>4.9</span>
                </p>
            </div>
        </Link>
    );
}
