import React from "react";
import AddNewProduct from "../CommenPages/AddNewProduct";

function ProductList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 overflow-y-auto h-[800px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Products</h2>
        <div className="text-right mb-4">
          <button
            onClick={handleClickOpen}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
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
                <button className="text-blue-600 hover:underline">Edit</button>
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
      <AddNewProduct open={open} handleClose={handleClose} />
    </div>
  );
}

export default ProductList;
