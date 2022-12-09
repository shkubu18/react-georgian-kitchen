import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import FoodList from "./components/FoodList";
import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Styles from "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Welcome />} />
        <Route path="food-list" element={<FoodList />} />
        <Route path=":name/detailpage" element={<DetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

