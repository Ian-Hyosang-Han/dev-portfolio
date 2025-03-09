import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";

function AppRouter() {

    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/javascriptGame" element={<About />} />
                <Route path="/moviedatabase" element={<About />} />
                <Route path="/capstone" element={<About />} />
                <Route path="/designtools" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
    );

}

export default AppRouter;