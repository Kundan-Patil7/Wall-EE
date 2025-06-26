import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trending from "./pages/Trending";
import AboutUs from "./pages/AboutUs";
import AiGenerated from "./pages/AiGenerated";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      {/* Include the Header at the top */}
      <Header />

      {/* Define the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ai-generated" element={<AiGenerated />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>

      {/* Include the Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
