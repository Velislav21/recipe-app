import SiteHeader from "./components/site-header/SiteHeader";
import FeaturedRecipes from "./components/featured-recipes/FeaturedRecipes";

function App() {
    return (
        <>
            <SiteHeader />
            <main>
                <FeaturedRecipes />
            </main>
        </>
    );
}

export default App;
