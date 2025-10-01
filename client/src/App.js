import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import SaleHistory from "./pages/SaleHistory";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
   
     <MainLayout>
   
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/salehistory" element={<SaleHistory />} />
        <Route path="/reports" element={<Reports />} /> 
        <Route path='/products' element={<Products/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
     </MainLayout>
  
    </div>
  );
};

export default App;
