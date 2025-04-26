import styles from "./SkeletonLoader.module.css";


export default function SkeletonLoader() {
    return (
        <div className={styles["skeleton-container"]}>
            <section className={styles["section"]}>
                <SkeletonBox
                    width="12em"
                    height="1.5rem"
                    className={styles["heading"]}
                    />
                <div className={styles["card-row"]}>
                    {[1, 2, 3].map((i) => (
                        <RecipeCardSkeleton key={i} />
                    ))}
                </div>
            </section>

            <section className={styles["section"]}>
                <SkeletonBox
                    width="12em"
                    height="1.5em"
                    className={styles["heading"]}
                    />
            </section>
            <section className={styles["section"]}>
                <SkeletonBox
                    width="15em"
                    height="1.5em"
                    className={styles["heading"]}
                    />
                <div className={styles["card-row"]}>
                    {[1, 2, 3, 4].map((i) => (
                        <RecipeCardSkeleton key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}
function RecipeCardSkeleton() {
    return (
        <div className={styles["card-skeleton"]}>
            <SkeletonBox height="8em" /> 
            <SkeletonBox
                height="1rem"
                width="100%"
                className={styles["margin-top"]}
            />
            <SkeletonBox
                height="0.8rem"
                width="60%"
                className={styles["margin-top"]}
            />
        </div>
    );
}

const SkeletonBox = ({
    width,
    height,
    className = "",
}: {
    width?: string;
    height?: string;
    className?: string;
}) => (
    <div
        className={`${styles["skeleton-box"]} ${className}`}
        style={{ width, height }}
    />
);