import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddproductPage from "./pages/AddproductPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import MainPage from "./pages/MainPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddproductPage />} />
        <Route path="admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
