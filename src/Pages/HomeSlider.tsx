import React from "react";
import AddHomeSlider from "../CommenPages/AddHomeSlider";

function HomeSlider() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const banners = [
    {
      id: 1,
      image:
        "https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg",
    },
    {
      id: 2,
      image:
        "https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg",
    },
    {
      id: 3,
      image:
        "https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 h-[calc(100vh-64px)] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Home Slider Banners
        </h1>
        <button
          onClick={() => handleClickOpen()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          {"Add Home Slide"}
        </button>
      </div>

      {/* Accordion */}

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Image</th>
              <th className="border border-gray-300 p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr key={banner.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">
                  <img
                    src={banner.image}
                    alt={`Banner ${banner.id}`}
                    className="w-48 h-auto rounded-lg"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">Rows per page: 10</div>
          <div className="text-sm">1–10 of 10</div>
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
      <AddHomeSlider handleClose={handleClose} open={open} />
    </div>
  );
}

export default HomeSlider;
