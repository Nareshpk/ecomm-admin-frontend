// import { Button } from "@mui/material";
// import React from "react";
// import AddSubCategory from "../CommenPages/AddSubCategory";

// function SubCategory() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <div className="flex justify-between items-center mb-4">
//         <h1>Category List</h1>
//         <Button
//           variant="contained"
//           color="primary"
//           style={{ marginBottom: "20px" }}
//           onClick={handleClickOpen}
//         >
//           Add Category
//         </Button>
//       </div>
//       <AddSubCategory handleClose={handleClose} open={open} />
//     </div>
//   );
// }

// export default SubCategory;
// SubCategoryTreeView.tsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import AddSubCategory from "../CommenPages/AddSubCategory";

type Category = {
  id: string;
  label: string;
  children?: Category[];
};

const fashionSubcategories: Category[] = [
  {
    id: "women",
    label: "Women",
    children: [
      { id: "kurtas", label: "Kurtas & Suits" },
      { id: "sarees", label: "Sarees" },
      { id: "tops", label: "Tops" },
      { id: "jeans", label: "Jeans" },
    ],
  },
  {
    id: "girls",
    label: "Girls",
    children: [
      { id: "girls-tops", label: "Tops" },
      { id: "kurta-sets", label: "Kurta Sets" },
    ],
  },
];

const categories: { label: string; id: string; children?: Category[] }[] = [
  { label: "Fashion", id: "fashion", children: fashionSubcategories },
  { label: "Electronics", id: "electronics" },
  { label: "Bags", id: "bags" },
  { label: "Footwear", id: "footwear" },
  { label: "Groceries", id: "groceries" },
  { label: "Beauty", id: "beauty" },
  { label: "Wellness", id: "wellness" },
  { label: "Jewellery", id: "jewellery" },
];

const SubCategoryTreeView: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = useState<string | false>("fashion");

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sub Category List</h2>
        <button
          onClick={handleClickOpen}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          ADD NEW SUB CATEGORY
        </button>
      </div>

      {categories.map((cat) => (
        <Accordion
          key={cat.id}
          expanded={expanded === cat.id}
          onChange={handleAccordionChange(cat.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">{cat.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {cat.children && cat.children.length > 0 ? (
              <RichTreeView
                items={fashionSubcategories}
                itemChildrenIndentation={24}
                defaultExpandedItems={["grid"]}
              />
            ) : (
              <p className="text-gray-500 text-sm">No subcategories</p>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      <AddSubCategory handleClose={handleClose} open={open} />
    </div>
  );
};

export default SubCategoryTreeView;
