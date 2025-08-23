import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { FaCloudUploadAlt } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AddNewCategoryProps {
  handleClose: () => void;
  open: boolean;
}

const AddSubCategory = ({ handleClose, open }: AddNewCategoryProps) => {
  const [productCategory, setProductCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleSubmit = () => {
    console.log("Product Category:", productCategory);
    console.log("Sub Category Name:", subCategoryName);
    // Add logic to handle form submission
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add New Sub Category
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="min-h-screen bg-gray-50 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Add Sub Category */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Add Sub Category
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                  <option>Select Category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub Category Name
                </label>
                <input
                  type="text"
                  placeholder="Enter sub category"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded flex items-center space-x-2">
                <FaCloudUploadAlt />
                <span>PUBLISH AND VIEW</span>
              </button>
            </div>

            {/* Add Third Level Category */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Add Third Level Category
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none">
                  <option>Select Category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub Category Name
                </label>
                <input
                  type="text"
                  placeholder="Enter third level category"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded flex items-center space-x-2">
                <FaCloudUploadAlt />
                <span>PUBLISH AND VIEW</span>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default AddSubCategory;
