// import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";

import Home from "./Pages/home/Home";
import ContactPage from "./Pages/contact-us/Contact-Us";
import ShapeofPouch from "./Pages/pouchesSubpages/ShapeofPouch";
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
import BlogDetails from "./Pages/blogs/BlogDetails";
import ProductDetails from "./Pages/home/productdetails/ProductDetails";
import PochesPage from "./Pages/Pouches/BagsProduct/PochesPage";

// 🆕 About Us components (sidebar pages)
import AboutLayout from "../src/Pages/aboutus/ManufacturingLayout";
import About from "../src/Pages/aboutus/About-Us";
import Leadership from "../src/Pages/aboutus/Leadership";
import VisionMission from "../src/Pages/aboutus/VisionMission";
import Philosophy from "../src/Pages/aboutus/Philosophy";

// Global Layout with Navbar/Footer
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
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          // 🆕 About Us nested routes
          {
            path: "/about-us",
            element: <AboutLayout />,
            children: [
              {
                path: "about",
                element: <About />,
              },
              {
                path: "leadership",
                element: <Leadership />,
              },
              {
                path: "vision",
                element: <VisionMission />,
              },
              {
                path: "philosophy",
                element: <Philosophy />,
              },
            ],
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
            path: "/blogs/:id",
            element: <BlogDetails />,
          },
          {
            path: "/pochespage",
            element: <MachineCategorySelector />,
          },
          {
            path: "/products",
            element: <PochesPage />,
          },
          {
            path: "/products/:id",
            element: <ProductDetails />,
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
            path: "/Searchbytypes",
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
      scrollRestoration: "auto",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
