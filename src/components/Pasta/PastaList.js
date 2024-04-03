import { Box } from "@mui/material";
import React from "react";
import { pasta } from "../../Utils/product";
import Pasta from "./Pasta";

const PastaList = () => {
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
        {pasta.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Pasta data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PastaList;
