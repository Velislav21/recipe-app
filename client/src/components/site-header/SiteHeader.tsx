import { SearchIcon } from "lucide-react";

import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
    return (
        <header className={styles["site-header"]}>
            <h1 className={styles["text"]}>Tasty</h1>
            <form action="" className={styles["search-form"]}>
                <p className={styles["input-container"]}>
                    <SearchIcon />
                    <input
                        type="text"
                        name=""
                        placeholder="Search recipes..."
                      />
                </p>
            </form>
        </header>
    );
}
