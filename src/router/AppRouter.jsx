import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";

function AppRouter() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/javascriptGame" element={<About />} />
                <Route path="/moviedatabase" element={<About />} />
                <Route path="/capstone" element={<About />} />
                <Route path="/designtools" element={<About />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );

}

export default AppRouter;