import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";

import Home from "./Pages/home/Home";
import ContactPage from "./Pages/contact-us/Contact-Us";
import PouchMachines from "./Pages/Pouches/BagsProduct/PochesPage";
import BagMachines from "./Pages/Pouches/BagsProduct/BagsPage";
import ShapeofPouch from "./Pages/pouchesSubpages/ShapeofPouch";
import GalaxyTechAboutComponents from "./Pages/aboutus/About-Us";
import Gallery from "./Pages/gallery/GalleryPage";
import Blog from "./Pages/blogs/Blogs";
import ProductPage from "./Pages/product/ProductMain";
import MachineCategorySelector from "./Pages/product/Chooseproducts";
import BackToTopButton from "./components/Backtotop";
import SearchByModel from "./Pages/pouchesSubpages/Searchbymodel";
import SearchByType from "./Pages/pouchesSubpages/Searchbytypes";
import Enquirybutton from "./components/Enquirybutton";
import ShapeofBags from "./Pages/BagsSubPages/SearchByshapebag";
import Industries from "./Pages/industries/Industries";
import GetaQuote from "./components/GetaQuote";

// Layout component to wrap all pages with Navbar and Footer
const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
      <Enquirybutton />
      <BackToTopButton />
      
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  // Define routes using createBrowserRouter with a layout route
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about-us",
            element: <GalaxyTechAboutComponents />,
          },

          {
            path: "/gallerypage",
            element: <Gallery />,
          },
          {
            path: "/blogs",
            element: <Blog />,
          },
          {
            path: "/pochespage",
            element: <PouchMachines />,
          },
          {
            path: "/pochespage",
            element: <MachineCategorySelector />,
          },

          {
            path: "/products",
            element: <ProductPage />,
          },
          {
            path: "/bagspage",
            element: <BagMachines />,
          },
          {
            path: "/bagspage",
            element: <MachineCategorySelector />,
          },
          {
            path: "/shapeofpouch",
            element: <ShapeofPouch />,
          },
          {
            path: "/searchbymodel",
            element: <SearchByModel />,
          },
          {
            path: "/Searchbytype",
            element: <SearchByType />,
          },
          {
            path: "/Contact-Us",
            element: <ContactPage />,
          },
          {
            path: "/searchbyshape",
            element: <ShapeofBags />,
          },
          {
            path: "/searchbymodelbag",
            element: <SearchByModel />,
          },
          {
            path: "/searchbytypebag",
            element: <SearchByType />,
          },
           {
            path: "/industries",
            element: <Industries />,
          },
         
        ],
      },
    ],
    {
      // Enable scroll restoration
      scrollRestoration: "auto",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
