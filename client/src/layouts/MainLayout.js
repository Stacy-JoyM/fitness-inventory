// src/layouts/MainLayout.js
import React from "react";
import Sidebar from "../components /Sidebar";
import Navbar from "../components /Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar
          isLoggedIn={true}
          currentUser="Admin"
          onSignOut={() => console.log("User signed out")}
          onSignIn={() => console.log("Redirect to sign in")}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
