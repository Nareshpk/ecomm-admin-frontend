import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import type { TransitionProps } from "@mui/material/transitions";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../redux/actions/categoryAction";

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

const AddNewCategory = ({ handleClose, open }: AddNewCategoryProps) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const data:any ={
      catName:categoryName
    }
     try {
          dispatch(addCategoryAction(data) as any).then((res: any) => {
            console.log("sdfdsfdsfsdfdsfdsfds",res);
            
          }); // Dispatch the login action
        } catch (error) {
          console.error("Error during login:", error);
          alert("An error occurred. Please try again.");
        }
    console.log("Category Name:", categoryName);
    console.log("Uploaded Image:", image);
    handleClose();
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
              Add New Category
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 3 }}>
          <TextField
            fullWidth
            label="Category Name"
            variant="outlined"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Box
            sx={{
              border: "1px dashed gray",
              borderRadius: "8px",
              p: 2,
              textAlign: "center",
              mb: 3,
            }}
          >
            <input
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="upload-button"
            />
            <label htmlFor="upload-button" className="cursor-pointer">
              {image ? "Change Image" : "Upload Image"}
            </label>
            {image && (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    marginBottom: "8px",
                  }}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setImage(null)}
                >
                  Cancel Image
                </Button>
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            startIcon={<i className="fas fa-cloud-upload-alt"></i>}
          >
            Publish and View
          </Button>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default AddNewCategory;
