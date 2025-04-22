import { MoveLeft } from "lucide-react";
import styles from "./RecipeDetailsHeader.module.css";
import { useNavigate } from "react-router";
import { fallbackRecipeImage } from "../../../utils/fallbackRecipeImage";

type RecipeHeaderProps = {
    image: string;
    title?: string;
};

export default function RecipeHeader({ image, title }: RecipeHeaderProps) {
    const navigate = useNavigate();

    function goToPreviousPage() {
        navigate(-1);
    }

    return (
        <header className={styles["recipe-header"]}>
            <section className={styles["recipe-header-image-section"]}>
                <img
                    className={styles["recipe-header-image"]}
                    src={image}
                    onError={fallbackRecipeImage}
                />
                <button
                    className={styles["recipe-header-back-btn"]}
                    onClick={goToPreviousPage}
                >
                    <MoveLeft size={20} />
                </button>
                <div className={styles["recipe-header-info"]}>
                    <h1 className={styles["recipe-header-title"]}>{title}</h1>
                </div>
            </section>
        </header>
    );
}
