import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Button,
  Box,
  Rating,
} from "@mui/material";
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

const AddNewProduct = ({ handleClose, open }: AddNewCategoryProps) => {
  const [rating, setRating] = React.useState<number | null>(1);

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
              Add New Product
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          <Box
            component="form"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
            }}
          >
            <TextField label="Product Name" fullWidth />
            <TextField
              label="Product Description"
              multiline
              rows={4}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Product Category</InputLabel>
              <Select>
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Product Sub Category</InputLabel>
              <Select>
                <MenuItem value="subcategory1">Sub Category 1</MenuItem>
                <MenuItem value="subcategory2">Sub Category 2</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Product Price" type="number" fullWidth />
            <TextField label="Product Old Price" type="number" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Is Featured?</InputLabel>
              <Select>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Product Stock" type="number" fullWidth />
            <TextField label="Product Brand" fullWidth />
            <TextField label="Product Discount" type="number" fullWidth />
            <TextField label="Product RAM" fullWidth />
            <TextField label="Product Weight" type="number" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Product Size</InputLabel>
              <Select>
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Product Rating
            </Typography>
            <Rating
              name="product-rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Media & Images
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed gray",
                padding: 2,
                borderRadius: 1,
                cursor: "pointer",
              }}
            >
              <FaCloudUploadAlt size={50} />
              <Typography>Image Upload</Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Banner Images
            </Typography>
            <Switch />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed gray",
                padding: 2,
                borderRadius: 1,
                cursor: "pointer",
              }}
            >
              <FaCloudUploadAlt size={50} />
              <Typography>Image Upload</Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <TextField label="Banner Title" fullWidth />
          </Box>
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Publish and View
            </Button>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default AddNewProduct;
