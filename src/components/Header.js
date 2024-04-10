import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        padding: {
          sm: "3rem 0rem 1rem 0rem",
          md: "3rem 1rem 1rem 1rem",
          lg: "2rem 3rem 1rem 3rem",
        },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "5rem 0rem 2rem",
            sm: "2rem 0rem",
            md: "2rem 0rem",
            lg: "3rem 0rem",
          },
          borderBottom: {
            xs: "2px solid black",
          },
        }}
      >
        <Box textAlign="center">
          <Typography variant="h3" fontFamily="Inter" fontWeight="500">
            Welcome To AfroFoods
          </Typography>
          <Typography variant="subtitle1">
            Putting Smiles On Your Faces.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            paddingX: {
              xs: "1rem",
              sm: "1rem",
              md: 0,
            },
          }}
        >
          <img
            width="100%"
            height="auto"
            src={require("../assets/hpbg.jpg")}
            alt=""
            className=" md:rounded-xl rounded-xl opacity-90"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
