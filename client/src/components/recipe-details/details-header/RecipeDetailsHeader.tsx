import { MoveLeft } from "lucide-react";
import styles from "./RecipeDetailsHeader.module.css";
import { Link } from "react-router";
import { fallbackRecipeImage } from "../../../utils/fallbackRecipeImage";

type RecipeHeaderProps = {
    
}

export default function RecipeHeader() {
    return (
        <header className={styles["recipe-header"]}>
            <section className={styles["recipe-header-image-section"]}>
                <img
                    className={styles["recipe-header-image"]}
                    src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    onError={fallbackRecipeImage}
                />
                <Link to="/" className={styles["recipe-header-back-btn"]}>
                    <MoveLeft size={20} />
                </Link>
                <div className={styles["recipe-header-info"]}>
                    <h1 className={styles["recipe-header-title"]}>
                        Honey Glazed Salmon
                    </h1>
                    <div className={styles["recipe-header-author"]}>
                        <span className={styles["recipe-header-author"]}>
                            by Chef Alex
                        </span>
                    </div>
                </div>
            </section>
        </header>
    );
}
