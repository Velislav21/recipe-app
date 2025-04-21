import { AnalyzedInstructions } from "../../../types/recipes";
import InstructionsItem from "./InstructionsItem";
import styles from "./InstructionsList.module.css";

type InstructionsListProps = {
    instructions: AnalyzedInstructions[];
};

export function InstructionsList({ instructions }: InstructionsListProps) {
    return (
        <section className={styles["instructions-list"]}>
            <h2 className={styles["instructions-list-title"]}>Instructions</h2>
            <ol className={styles["instructions-list-steps"]}>
                {instructions[0].steps.map((step) => (
                    <InstructionsItem
                        key={step.number}
                        number={step.number}
                        instruction={step.step}
                    />
                ))}
            </ol>
        </section>
    );
}
