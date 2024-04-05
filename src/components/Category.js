import { Box, Typography } from "@mui/material";
import CategoryTabs from "./CategoryTabs";

export const Category = () => {
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "2px solid black",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            pb: "1rem",
            typography: {
              sm: "h5",
              md: "h5",
            },
            fontWeight: {
              sm: "700",
            },
            fontFamily: "inter",
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
