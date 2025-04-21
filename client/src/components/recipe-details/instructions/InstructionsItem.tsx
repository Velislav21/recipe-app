import styles from "./InstructionsItem.module.css"

type InstructionsItemProps = {
    instruction: string;
    number: number;
};

export default function InstructionsItem({
    instruction,
    number,
}: InstructionsItemProps) {
    return (
        <li className={styles["instruction-item"]}>
            <span className={styles["instruction-number"]}>{number}</span>
            <span className={styles["instruction-text"]}>{instruction}</span>
        </li>
    );
}
