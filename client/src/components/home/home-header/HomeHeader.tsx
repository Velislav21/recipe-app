import SearchBar from "../../search-bar/SearchBar";
import styles from "./HomeHeader.module.css";

type HomeHeaderProps = {
    onSearchSubmit: (searchValue: string) => void
}

export default function HomeHeader({onSearchSubmit}: HomeHeaderProps){
    return (
        <header className={styles["site-header"]}>
            <h1 className={styles["text"]}>Tasty</h1>
            <SearchBar onSearchSubmit={onSearchSubmit}/>
        </header>
    );
}
