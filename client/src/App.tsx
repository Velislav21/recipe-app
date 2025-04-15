import SiteHeader from "./components/site-header/SiteHeader";
import FeaturedRecipes from "./components/featured-recipes/FeaturedRecipes";
import Categories from "./components/categories/Categories";

function App() {
    return (
        <>
            <SiteHeader />
            <main>
                <FeaturedRecipes />
                <Categories />
            </main>
        </>
    );
}

export default App;
