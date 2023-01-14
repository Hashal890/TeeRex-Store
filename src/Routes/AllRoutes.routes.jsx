import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products.routes";
import Cart from "./Cart.routes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
