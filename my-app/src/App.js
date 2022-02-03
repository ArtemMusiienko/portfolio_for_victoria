import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Pages/home";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Blog from "./Pages/blog"; 
 import Footer from "./Components/footer";
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
