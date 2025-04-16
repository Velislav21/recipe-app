import Categories from "../categories/Categories";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <FeaturedRecipes />
            <Categories />
            <PopularRecipes />
        </>
    );
}
