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
          display: "grid",
          columnGap: 1,
          rowGap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          padding: {
            sm: "0rem 0rem 1rem 0rem",
            md: "0rem 0rem 1rem 0rem ",
            lg: "1.5rem 2rem",
            xl: "1.5rem 3rem",
          },
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
