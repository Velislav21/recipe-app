import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RecipeDetails from "./components/recipe-details/RecipeDetails";

import { Routes, Route } from "react-router";
import CategoryPage from "./components/categories/category-specific-page/CategoryPage";

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/recipe/:recipeId" Component={RecipeDetails}/>
                    <Route path="/category/:category" Component={CategoryPage} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
