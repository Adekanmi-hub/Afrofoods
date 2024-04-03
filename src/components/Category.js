import { Box, Typography } from "@mui/material";
import CategoryTabs from "./CategoryTabs";

export const Category = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "0.5rem",
          padding: "o.5rem",
          borderBottom: "2px solid black",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="700"
          sx={{
            textAlign: "center",
          }}
        >
          CATEGORY
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "0.5rem",
        }}
      >
        <CategoryTabs />
      </Box>
    </Box>
  );
};

export default Category;
