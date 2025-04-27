import { SearchIcon } from "lucide-react";

import styles from "./SearchBar.module.css";
import { FormEvent } from "react";

type SearchBarProps = {
    onSearchSubmit: (searchValue: string) => void;
};

export default function SearchBar({ onSearchSubmit }: SearchBarProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const searchValue = formData.get("searchValue") as string;
        if (searchValue) {
            onSearchSubmit(searchValue.trim());
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles["search-form"]}>
            <p className={styles["input-container"]}>
                <SearchIcon />
                <input
                    type="text"
                    name="searchValue"
                    placeholder="Search recipes..."
                />
            </p>
        </form>
    );
}