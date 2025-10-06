import React, { useState } from 'react';
import { Package, TrendingUp, ShoppingCart, Clock, Search, Bell, Download, Plus, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [salesPeriod, setSalesPeriod] = useState('monthly');
  const [countryPeriod, setCountryPeriod] = useState('yearly');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Weights', quantity: '', price: '' });
  const [inventoryData, setInventoryData] = useState([
    { id: 'FIT001', name: 'Dumbbells Set', category: 'Weights', quantity: 45, status: 'In Stock', price: 89.99 },
    { id: 'FIT002', name: 'Yoga Mat Premium', category: 'Accessories', quantity: 12, status: 'Low Stock', price: 34.99 },
    { id: 'FIT003', name: 'Treadmill Pro X', category: 'Cardio', quantity: 8, status: 'In Stock', price: 1299.99 },
    { id: 'FIT004', name: 'Resistance Bands', category: 'Accessories', quantity: 3, status: 'Low Stock', price: 24.99 },
    { id: 'FIT005', name: 'Kettlebell 20kg', category: 'Weights', quantity: 28, status: 'In Stock', price: 54.99 },
  ]);

  const stats = [
    { label: 'Total Products', value: '248', change: '+12%', icon: Package, trend: 'up' },
    { label: 'Total Value', value: '$45,280', change: '+8%', icon: TrendingUp, trend: 'up' },
    { label: 'Low Stock Items', value: '18', change: '-5%', icon: ShoppingCart, trend: 'down' },
    { label: 'Avg Restock Time', value: '3.2 Days', change: '+2%', icon: Clock, trend: 'up' },
  ];

  const monthlySalesData = [
    { day: 'Mon', sales: 18500 },
    { day: 'Tue', sales: 22300 },
    { day: 'Wed', sales: 32849 },
    { day: 'Thu', sales: 27600 },
    { day: 'Fri', sales: 15200 },
    { day: 'Sat', sales: 28900 },
    { day: 'Sun', sales: 19800 },
  ];

  const yearlySalesData = [
    { month: 'Jan', sales: 285000 },
    { month: 'Feb', sales: 320000 },
    { month: 'Mar', sales: 398490 },
    { month: 'Apr', sales: 356000 },
    { month: 'May', sales: 425000 },
    { month: 'Jun', sales: 389000 },
  ];

  const monthlyCountryData = [
    { country: 'USA', value: 29, percentage: 38 },
    { country: 'UK', value: 20, percentage: 26 },
    { country: 'Kenya', value: 14, percentage: 18 },
    { country: 'Nigeria', value: 10, percentage: 13 },
    { country: 'Australia', value: 4, percentage: 5 },
  ];

  const yearlyCountryData = [
    { country: 'USA', value: 345, percentage: 35 },
    { country: 'UK', value: 289, percentage: 29 },
    { country: 'Kenya', value: 178, percentage: 18 },
    { country: 'Nigeria', value: 123, percentage: 13 },
    { country: 'Australia', value: 50, percentage: 5 },
  ];

  const currentSalesData = salesPeriod === 'monthly' ? monthlySalesData : yearlySalesData;
  const currentCountryData = countryPeriod === 'monthly' ? monthlyCountryData : yearlyCountryData;

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.quantity || !newProduct.price) {
      alert('Please fill in all fields');
      return;
    }
    const product = {
      id: `FIT${String(inventoryData.length + 1).padStart(3, '0')}`,
      name: newProduct.name,
      category: newProduct.category,
      quantity: parseInt(newProduct.quantity),
      status: parseInt(newProduct.quantity) < 10 ? 'Low Stock' : 'In Stock',
      price: parseFloat(newProduct.price)
    };
    setInventoryData([...inventoryData, product]);
    setNewProduct({ name: '', category: 'Weights', quantity: '', price: '' });
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="ml-4 p-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download size={18} />
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800" onClick={() => setShowAddModal(true)}>
              <Plus size={18} />
              Add Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <stat.icon size={24} className="text-gray-700" />
                </div>
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Total Sales</h3>
              <div className="relative">
                <button 
                  onClick={() => setSalesPeriod(salesPeriod === 'monthly' ? 'yearly' : 'monthly')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  {salesPeriod === 'monthly' ? 'Monthly' : 'Yearly'}
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={currentSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey={salesPeriod === 'monthly' ? 'day' : 'month'} stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`${value}`, 'Sales']}
                />
                <Bar dataKey="sales" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Country Distribution</h3>
              <div className="relative">
                <button 
                  onClick={() => setCountryPeriod(countryPeriod === 'monthly' ? 'yearly' : 'monthly')}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  {countryPeriod === 'monthly' ? 'Monthly' : 'Yearly'}
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {currentCountryData.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">{item.country}</span>
                    <span className="text-sm font-medium text-gray-900">{item.value}K</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Inventory Items</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventoryData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${'{'}item.price{'}'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'In Stock' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Product</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g. Dumbbells Set"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="Weights">Weights</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Machines">Machines</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

