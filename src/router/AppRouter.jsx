import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectPage from "../pages/ProjectPage";
// import JavascriptGame from "../pages/JavascriptGame";

function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:projectId" element={<ProjectPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;