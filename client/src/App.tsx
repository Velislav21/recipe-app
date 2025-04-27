import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import CategoryPage from "./components/categories/category-specific-page/CategoryPage";

import { Routes, Route } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorPage from "./components/errors/ErrorPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/recipe/:recipeId" Component={RecipeDetails} />
                <Route path="/category/:category" Component={CategoryPage} />
                <Route path="*" Component={ErrorPage}/>
            </Routes>
            <Footer />
            <ReactQueryDevtools buttonPosition="bottom-left" />
        </QueryClientProvider>
    );
}

export default App;
