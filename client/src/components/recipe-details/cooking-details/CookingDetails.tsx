import { Clock, UserIcon } from "lucide-react";
import styles from "./CookingDetails.module.css"

type CookingDetailsProps = {
    readyInMinutes: number;
    servings: number;
}

export default function CookingDetails({readyInMinutes, servings}: CookingDetailsProps) {
    return (
        <section className={styles["recipe-header-description"]}>
            <p className={styles["recipe-description"]}>
                A simple yet elegant salmon dish with a sweet honey glaze.
                Perfect for a quick weeknight dinner that feels fancy.
            </p>
            <div className={styles["recipe-header-stats"]}>
                <div className={styles["recipe-header-stat"]}>
                    <span className={styles["recipe-header-stat-icon"]}>
                        <Clock />
                    </span>
                    <div>
                        <div className={styles["recipe-header-stat-value"]}>
                            {readyInMinutes} min
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
