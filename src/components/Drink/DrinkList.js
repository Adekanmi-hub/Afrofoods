import { Box } from "@mui/material";
import React from "react";
import { drinks } from "../../Utils/product";
import Drink from "./Drink";

const DrinkList = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 1rem 1rem 1rem",
        }}
      >
        {drinks.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Drink data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DrinkList;
