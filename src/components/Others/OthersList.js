import { Box } from "@mui/material";
import React from "react";
import { others } from "../../Utils/product";
import Others from "./Others";

const OthersList = () => {
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
        {others.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Others data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OthersList;
