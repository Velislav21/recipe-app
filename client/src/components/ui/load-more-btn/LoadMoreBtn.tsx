import { FetchNextPageOptions } from "@tanstack/react-query";
import styles from "./LoadMoreBtn.module.css"

export type LoadMoreBtnProps = {
    fetchNextPage: (options?: FetchNextPageOptions) => {},
    hasNextPage: boolean,
    isFetchingNextPage: boolean,
}

export default function LoadMoreBtn({fetchNextPage, hasNextPage, isFetchingNextPage}: LoadMoreBtnProps) {
    return (
        <div className={styles["pagination-container"]}>
            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                className={styles["load-more-button"]}
            >
                {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                    ? "Load More Recipes"
                    : "No more recipes to load"}
            </button>
        </div>
    );
}
