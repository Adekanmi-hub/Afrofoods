import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const Navbar = ({ setShowModal }) => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        zIndex: "1",
        position: "fixed",
        top: "0px",
        width: "100%",
        height: "4rem",
      }}
    >
      <Box
        sx={{
          padding: {
            sm: "1rem 1rem",
            md: "1rem 1rem",
            lg: "1rem 3rem",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          {/* THIS IS THE HEAD CONTAINER */}
          <Box>
            <Typography variant="h4" color="white">
              AfroFoods
            </Typography>
          </Box>

          {/* THIS IS THE CART & CONTACT US BUTTON CONTAINER */}
          <Box
            sx={{
              width: {
                sm: "22%",
                md: "20%",
                lg: "14%",
                xl: "12%",
              },
            }}
            display="flex"
            justifyContent="space-between"
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                position: "relative",
                bottom: "0.5rem",
                border: "1px solid #FF7801 ",
                color: "white",
                fontSize: {
                  xs: "10px",
                  md: "14px",
                },
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
                fontSize: {
                  xs: "10px",
                  md: "14px",
                },
                color: "white",
                backgroundColor: "#FF7801",
                "&:hover": {
                  backgroundColor: "#1A76D2",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
