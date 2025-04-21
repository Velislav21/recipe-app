import { MoveLeft } from "lucide-react";
import styles from "./RecipeDetailsHeader.module.css";
import { Link } from "react-router";
import { fallbackRecipeImage } from "../../../utils/fallbackRecipeImage";

type RecipeHeaderProps = {
    image: string;
    title: string;
};

export default function RecipeHeader({ image, title }: RecipeHeaderProps) {
    return (
        <header className={styles["recipe-header"]}>
            <section className={styles["recipe-header-image-section"]}>
                <img
                    className={styles["recipe-header-image"]}
                    src={image}
                    onError={fallbackRecipeImage}
                />
                <Link to="/" className={styles["recipe-header-back-btn"]}>
                    <MoveLeft size={20} />
                </Link>
                <div className={styles["recipe-header-info"]}>
                    <h1 className={styles["recipe-header-title"]}>{title}</h1>
                </div>
            </section>
        </header>
    );
}
