import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Properties from "./pages/Properties";
import Contact from "./pages/Contact";

import Details from "./pages/Details";
// import Blog from "./pages/Blog";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="blog" element={<Blog />} /> */}
            <Route path="blog/:_id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
