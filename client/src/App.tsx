import SiteHeader from "./components/site-header/SiteHeader";
import FeaturedRecipes from "./components/featured-recipes/FeaturedRecipes";
import Categories from "./components/categories/Categories";
import PopularRecipes from "./components/popular-recipes/PopularRecipes";

function App() {
    return (
        <>
            <SiteHeader />
            <main>
                <FeaturedRecipes />
                <Categories />
                <PopularRecipes />
            </main>
        </>
    );
}

export default App;
