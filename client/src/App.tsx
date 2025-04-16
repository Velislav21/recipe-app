import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import CategoryPage from "./components/categories/category-specific-page/CategoryPage";

import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/recipe/:recipeId" Component={RecipeDetails} />
                <Route path="/category/:category" Component={CategoryPage} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
