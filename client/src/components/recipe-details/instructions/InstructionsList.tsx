import InstructionsItem from "./InstructionsItem";
import styles from "./InstructionsList.module.css";

export function InstructionsList() {
    return (
        <div className={styles["instructions-list"]}>
            <h2 className={styles["instructions-list__title"]}>Instructions</h2>
            <ol className={styles["instructions-list__steps"]}>
                <InstructionsItem />
                <InstructionsItem />
                <InstructionsItem />
                <InstructionsItem />
                <InstructionsItem />
                <InstructionsItem />
            </ol>
        </div>
    );
}
