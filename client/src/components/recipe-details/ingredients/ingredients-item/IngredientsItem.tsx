import styles from "./IngredientsItem.module.css"
export default function IngredientsItem() {
    return (
        <li className={styles["ingredients-item"]}>
            <span>Pasta</span>
            <span>400g</span>
        </li>
    );
}
