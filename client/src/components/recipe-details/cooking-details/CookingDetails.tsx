import { Clock, UserIcon } from "lucide-react";
import styles from "./CookingDetails.module.css"
import { calculateTime } from "../../../utils/calculateTime";

type CookingDetailsProps = {
    readyInMinutes: number;
    servings: number;
}

export default function CookingDetails({readyInMinutes, servings}: CookingDetailsProps) {
    return (
        <section className={styles["recipe-header-description"]}>
            <div className={styles["recipe-header-stats"]}>
                <div className={styles["recipe-header-stat"]}>
                    <span className={styles["recipe-header-stat-icon"]}>
                        <Clock />
                    </span>
                    <div>
                        <div className={styles["recipe-header-stat-value"]}>
                            {calculateTime(readyInMinutes)}
                        </div>
                        <div className={styles["recipe-header-stat-label"]}>
                            Cook Time
                        </div>
                    </div>
                </div>
                <div className={styles["recipe-header-stat"]}>
                    <span className={styles["recipe-header-stat-icon"]}>
                        <UserIcon />
                    </span>
                    <div>
                        <div className={styles["recipe-header-stat-value"]}>
                            {servings}
                        </div>
                        <div className={styles["recipe-header-stat-label"]}>
                            Servings
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
