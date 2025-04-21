import styles from "./IngredientsItem.module.css";

type IngredientsItemProps = {
    name: string;
    measures: {
        metric: {
            amount: number;
            unitLong: string;
            unitShort: string;
        };
    }
};

export default function IngredientsItem({
    name,
    measures,
}: IngredientsItemProps) {
    return (
        <li className={styles["ingredients-item"]}>
            <span>{name}</span>
            <span>
                {measures.metric.amount} {measures.metric.unitLong}
            </span>
        </li>
    );
}
