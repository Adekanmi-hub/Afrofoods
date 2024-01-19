import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box padding="1rem 0rem" borderBottom="2px solid black">
      <Box textAlign="center">
        <Typography variant="h3" fontFamily="Inter" fontWeight="500">
          Welcome To GiftHouse
        </Typography>
        <Typography variant="subtitle1">
          Putting Smiles On Your Faces.
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
        }}
      >
        <img
          width="100%"
          height="auto"
          src={require("../assets/hpbg.jpg")}
          alt=""
          className="rounded-xl opacity-90"
        />
      </Box>
    </Box>
  );
};

export default Header;
