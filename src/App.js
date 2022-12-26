import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Contacts, ProductDetails, Error, Articles } from "./pages";

import { Topbar, Navbar, Footer, SingleProduct } from "./components";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/*" element={<Error />} />
        {/* <Route path="/subitems" element={<Subitems />} /> */}
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
