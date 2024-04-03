import { Box } from "@mui/material";
import React from "react";
import { spices } from "../../Utils/product";
import Spice from "./Spice";

const SpicesList = () => {
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
          padding: "1rem 2rem 1rem 2rem",
        }}
      >
        {spices.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Spice data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpicesList;
