import { ChefHat, Clock, UserIcon } from "lucide-react";
import styles from "./CookingDetails.module.css"

export default function CookingDetails() {
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
                            20 min
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
                            2
                        </div>
                        <div className={styles["recipe-header-stat-label"]}>
                            Servings
                        </div>
                    </div>
                </div>
                <div className={styles["recipe-header-stat"]}>
                    <span className={styles["recipe-header-stat-icon"]}>
                        <ChefHat />
                    </span>
                    <div>
                        <div className={styles["recipe-header-stat-value"]}>
                            Medium
                        </div>
                        <div className={styles["recipe-header-stat-label"]}>
                            Difficulty
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
