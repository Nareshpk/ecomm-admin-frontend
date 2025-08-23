import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AddHomeSliderProps {
  handleClose: () => void;
  open: boolean;
}
function AddHomeSlider({ handleClose, open }: AddHomeSliderProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };

  const handleCancelImage = (imageUrl: string) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image !== imageUrl)
    );
  };

  const handleCancelAllImages = () => {
    setSelectedImages([]);
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
              Add Home Slide
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="p-6 bg-gray-100 ">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-xl font-bold mb-4">Add Home Slide</h2>
              {/* Image Upload Section */}
              <div className="border border-dashed border-gray-300 p-6 rounded-lg flex flex-col justify-center items-center mb-6">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="mb-4"
                />
                <span className="text-gray-500">Choose images to upload</span>
                {selectedImages.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={handleCancelAllImages}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                    >
                      Cancel All Images
                    </button>
                  </div>
                )}
              </div>

              {/* Selected Images Preview */}
              <div className="grid grid-cols-2 gap-4">
                {selectedImages.map((imageUrl, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={imageUrl}
                      alt={`Selected ${index}`}
                      className="w-48 h-auto rounded-lg mb-4"
                    />
                    <button
                      onClick={() => handleCancelImage(imageUrl)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                    >
                      Cancel Image
                    </button>
                  </div>
                ))}
              </div>

              {/* Publish Button */}
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 mt-6">
                Publish and View
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default AddHomeSlider;
