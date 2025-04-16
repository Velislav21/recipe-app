import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RecipeDetails from "./components/recipe-details/RecipeDetails";

import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/recipe/:id" Component={RecipeDetails}/>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
