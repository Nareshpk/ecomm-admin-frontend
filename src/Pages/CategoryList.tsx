import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewCategory from "../CommenPages/AddNewCategory";

const categories = [
  { id: 1, image: "👗", name: "Fashion" },
  { id: 2, image: "📱", name: "Electronics" },
  { id: 3, image: "👜", name: "Bags" },
  { id: 4, image: "👟", name: "Footwear" },
  { id: 5, image: "🛒", name: "Groceries" },
  { id: 6, image: "💄", name: "Beauty" },
];

const CategoryList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between items-center mb-4">
        <h1>Category List</h1>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
          onClick={handleClickOpen}
        >
          Add Category
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Image</strong>
              </TableCell>
              <TableCell>
                <strong>Category Name</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.image}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddNewCategory handleClose={handleClose} open={open} />
    </div>
  );
};

export default CategoryList;
