import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import HomePage from "./landing_page/home/HomePage";
import SignUpPage from "./landing_page/signup/SignUpPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/signup/Login";
import Home from "./landing_page/signup/Home";
import Signup from "./landing_page/signup/Signup";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/Products" element={<ProductPage/>}/>
        <Route path="/Pricing" element={<PricingPage/>}/>
        <Route path="/Support" element={<SupportPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signupform" element={<Signup/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </CookiesProvider>,
);
