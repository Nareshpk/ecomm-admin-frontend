import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const data: any = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Sales",
        data: [0, 0, 500000, 4000000, 3800000, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(34, 197, 94, 0.8)", // Green color
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Users",
        data: [0, 0, 1000, 2000, 1500, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(59, 130, 246, 0.8)", // Blue color
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            if (context.dataset.label === "Total Sales") {
              return `Total Sales: ₹${context.raw.toLocaleString()}`;
            } else if (context.dataset.label === "Total Users") {
              return `Total Users: ${context.raw}`;
            }
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return value >= 1000000
              ? `${value / 1000000}M`
              : value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 overflow-y-auto h-[800px]">
      {/* Welcome Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, <span className="text-blue-600">naresh pk</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening on your store today. See the statistics at
          once.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Total Users */}
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-4xl">
            <i className="fas fa-chart-pie"></i>
          </div>
          <div>
            <p className="text-sm">Total Users</p>
            <h2 className="text-xl font-bold">1546</h2>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-4xl">
            <i className="fas fa-gift"></i>
          </div>
          <div>
            <p className="text-sm">Total Orders</p>
            <h2 className="text-xl font-bold">385</h2>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-4xl">
            <i className="fas fa-box"></i>
          </div>
          <div>
            <p className="text-sm">Total Products</p>
            <h2 className="text-xl font-bold">50</h2>
          </div>
        </div>

        {/* Total Categories */}
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-4xl">
            <i className="fas fa-comments"></i>
          </div>
          <div>
            <p className="text-sm">Total Category</p>
            <h2 className="text-xl font-bold">8</h2>
          </div>
        </div>
      </div>

      {/* Section 2: Products Table */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Products</h2>
          <div className="text-right mb-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Add Product
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>Category By</option>
              <option>Fashion</option>
              <option>Electronics</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>Sub Category By</option>
              <option>Men</option>
              <option>Women</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>Third Level Sub Category By</option>
              <option>Shirts</option>
              <option>Pants</option>
            </select>
            <input
              type="text"
              placeholder="Search here..."
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Add Product Button */}

          {/* Table */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Product</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Sub Category</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Sales</th>
                <th className="border border-gray-300 p-2">Stock</th>
                <th className="border border-gray-300 p-2">Rating</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Product 1</td>
                <td className="border border-gray-300 p-2">Fashion</td>
                <td className="border border-gray-300 p-2">Men</td>
                <td className="border border-gray-300 p-2">₹320.00</td>
                <td className="border border-gray-300 p-2">2 sales</td>
                <td className="border border-gray-300 p-2">2503</td>
                <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline ml-2">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <span>Rows per page: 50</span>
            <span>1–50 of 100</span>
            <div className="flex space-x-2">
              <button className="px-2 py-1 border border-gray-300 rounded-lg">
                Prev
              </button>
              <button className="px-2 py-1 border border-gray-300 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>

        {/* Search Bar */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 border border-gray-300 rounded-lg w-1/3"
          />
        </div>

        {/* Orders Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">Payment ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">Pincode</th>
              <th className="border border-gray-300 p-2">Total Amount</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">
                67d2a58528606772ba86ae04
              </td>
              <td className="border border-gray-300 p-2">CASH ON DELIVERY</td>
              <td className="border border-gray-300 p-2">Alpha Attang</td>
              <td className="border border-gray-300 p-2">2347084727997</td>
              <td className="border border-gray-300 p-2">
                Isaac Opeyemi Street, Lagos
              </td>
              <td className="border border-gray-300 p-2">105101</td>
              <td className="border border-gray-300 p-2">₹1200</td>
              <td className="border border-gray-300 p-2">alpha@example.com</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">
                67d2804e28606772ba86a222
              </td>
              <td className="border border-gray-300 p-2">CASH ON DELIVERY</td>
              <td className="border border-gray-300 p-2">Clifford Obure</td>
              <td className="border border-gray-300 p-2">254759466446</td>
              <td className="border border-gray-300 p-2">
                254 Nairobi Municipality
              </td>
              <td className="border border-gray-300 p-2">00100</td>
              <td className="border border-gray-300 p-2">₹3500</td>
              <td className="border border-gray-300 p-2">
                clifford@example.com
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">Rows per page: 10</div>
          <div className="text-sm">1–10 of 100</div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 border border-gray-300 rounded-lg">
              Prev
            </button>
            <button className="px-2 py-1 border border-gray-300 rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Section 4: Categories Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Total Users & Total Sales
        </h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Dashboard;
