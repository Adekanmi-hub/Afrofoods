import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const Navbar = ({ setShowModal }) => {
  return (
    <Box borderBottom="2px solid black">
      <Box display="flex" justifyContent="space-between">
        {/* THIS IS THE HEAD CONTAINER */}
        <Box>
          <Typography variant="h4">AfroFoods</Typography>
        </Box>

        {/* THIS IS THE CART & CONTACT US BUTTON CONTAINER */}
        <Box display="flex" justifyContent="space-between" width="12%">
          <Button
            size="small"
            variant="outlined"
            sx={{
              position: "relative",
              bottom: "0.5rem",
            }}
            onClick={() => setShowModal(true)}
          >
            Cart
          </Button>

          <Button
            size="small"
            variant="contained"
            sx={{
              position: "relative",
              bottom: "0.5rem",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
