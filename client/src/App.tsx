import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" Component={Home}/>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
