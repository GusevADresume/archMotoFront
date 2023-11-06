import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import Bespoke from "../pages/Bespoke";
import Ownership from "../pages/Ownership";
import Arch1s from "../pages/Arch-1s";
import KRGT from "../pages/KRGT-1";
import Method143 from "../pages/Method-143";
import News from "../pages/News";
import NewsVideoPage from "../pages/NewsVideoPage";
import NewsArticlePage from "../pages/NewsArticlePage"
import Contact from "../pages/Contact";


export default function ProjectRouters(postId) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/BESPOKE" element={<Bespoke />} />
        <Route path="/OWNERSHIP" element={<Ownership />} />
        <Route path="/1S" element={<Arch1s />} />
        <Route path="/KRGT-1" element={<KRGT />} />
        <Route path="/METHOD-143" element={<Method143 />} />
        <Route path="/NEWS" element={<News />} />
        <Route path="/CONTACT" element={<Contact />} />
        <Route path="/Video" element={<NewsVideoPage />} />
        <Route path="/Article" element={<NewsArticlePage />} />
      </Routes>
    </div>
  );
}
