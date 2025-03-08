import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/javascriptGame" element={<About />} />
                <Route path="/moviedatabase" element={<About />} />
                <Route path="/capstone" element={<About />} />
                <Route path="/designtools" element={<About />} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRouter;