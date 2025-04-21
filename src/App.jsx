import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/index";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Footer from "./components/Footer";
import NewsInfo from "./components/NewsInfo";
import Collection from "./components/Collection";
import About from "./pages/About";
import Connection from "./pages/Connection";
import Wishlist from "./pages/Wishlist";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/perfect" element={<NewsInfo />} />
        <Route path="/perfect-2" element={<NewsInfo />} />
        <Route path="/perfect-3" element={<NewsInfo />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Connection />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
