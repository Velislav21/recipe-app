import CategoriesList from "../categories/categories-list/CategoriesList";
import FeaturedRecipes from "../featured-recipes/FeaturedRecipes";
import PopularRecipes from "../popular-recipes/PopularRecipes";
import HomeHeader from "./home-header/HomeHeader";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <main>
                <FeaturedRecipes />
                <CategoriesList />
                <PopularRecipes />
            </main>
        </>
    );
}
