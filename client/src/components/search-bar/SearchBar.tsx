import { SearchIcon } from "lucide-react";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
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
