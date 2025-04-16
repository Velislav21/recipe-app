import SearchBar from "../../search-bar/SearchBar";
import styles from "./HomeHeader.module.css";

export default function HomeHeader() {
    return (
        <header className={styles["site-header"]}>
            <h1 className={styles["text"]}>Tasty</h1>
            <SearchBar />
        </header>
    );
}
