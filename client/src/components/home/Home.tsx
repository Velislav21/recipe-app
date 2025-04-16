import Categories from "../categories/Categories";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import SearchBar from "../search-bar/SearchBar";

export default function Home() {
    return (
        <>
            <SearchBar />
            <FeaturedRecipes />
            <Categories />
            <PopularRecipes />
        </>
    );
}
