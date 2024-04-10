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
