// src/pages/Dashboard.js
import React from "react";
import Analyticscard from "../components /Analyticscard";
import {
  Card,
  ListGroup,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Example sales data
const salesData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 500 },
  { month: "Mar", sales: 700 },
  { month: "Apr", sales: 600 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 1200 },
  { month: "Jul", sales: 1500 },
];

// Example best sellers
const bestSellers = [
  { id: 1, name: "Running Shoes", sold: 250 },
  { id: 2, name: "Training Sneakers", sold: 220 },
  { id: 3, name: "Sports T-Shirt", sold: 190 },
  { id: 4, name: "Compression Leggings", sold: 160 },
  { id: 5, name: "Hoodie (Athletic Fit)", sold: 140 },
  { id: 6, name: "Sports Shorts", sold: 130 },
  { id: 7, name: "Track Jacket", sold: 120 },
  { id: 8, name: "Yoga Pants", sold: 110 },
  { id: 9, name: "Training Tank Top", sold: 95 },
  { id: 10, name: "CrossFit Shoes", sold: 90 },
];
  // Example stats — replace with real data later
const totalSales = "$120,000";
const totalProducts = 340;
const customers = 1200;
const profits = "$45,000";

function Dashboard() {
  return (
    <div className="container mt-4" >
       {/* ===== First Row: Analytics Cards ===== */}
     {/* ===== Summary Row: Key Metrics ===== */}
      <div className="row mb-4">
        <div className="col-md-3">
          <Card className="p-3 shadow-sm text-center">
            <h6>Total Sales (Year)</h6>
            <h3 className="text-primary">{totalSales}</h3>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 shadow-sm text-center">
            <h6>Total Products</h6>
            <h3 className="text-success">{totalProducts}</h3>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 shadow-sm text-center">
            <h6>Customers</h6>
            <h3 className="text-warning">{customers}</h3>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 shadow-sm text-center">
            <h6>Profits</h6>
            <h3 className="text-danger">{profits}</h3>
          </Card>
        </div>
      </div>

       {/* ===== Second Row: : Chart + Best Sellers =====  */}
        <div className="row mt-4">
        {/* Left: Sales Trend Chart */}
        <div className="col-md-8">
          <Card className="p-3 shadow-sm">
            <h5>Sales Trend (Yearly)</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#007bff"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Right: Best Sellers List */}
        {/* Right: Best Sellers List */}
<div className="col-md-4">
  <Card className="p-3 shadow-sm">
    <h5 className="mb-3">Best Sellers</h5>
    <div
      style={{
        maxHeight: "300px",
        overflowY: "auto",
        background: "#f9fafb", // light gray background
        borderRadius: "8px",
        padding: "8px",
      }}
      className="custom-scroll"
    >
      <ListGroup variant="flush">
        {bestSellers.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
            style={{
              border: "none",
              padding: "10px 12px",
              borderRadius: "6px",
              marginBottom: "6px",
              background: "#ffffff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2ff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            <span>{item.name}</span>
            <span className="text-muted small">{item.sold} sold</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </Card>
</div>

      </div>
    </div>
  );
}

export default Dashboard;

