import { Box } from "@mui/material";
import React from "react";
import { Category } from "./Category";

const Body = () => {
  return (
    <Box
      sx={{
        padding: {
          md: "0rem 1rem 3rem 1rem",
          lg: "0rem 3rem 3rem 3rem",
        },
      }}
    >
      <Category />
    </Box>
  );
};

export default Body;
