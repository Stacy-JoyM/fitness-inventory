// src/layouts/MainLayout.js
import React from "react";
import Sidebar from "../components /Sidebar";
import Navbar from "../components /Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar (always visible) */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-grow-1">
        <Navbar
         isLoggedIn={true}
         currentUser="Admin"
         onSignOut={() => console.log("User signed out")}
         onSignIn={() => console.log("Redirect to sign in")}
       />
       {/* Page Content */}
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
