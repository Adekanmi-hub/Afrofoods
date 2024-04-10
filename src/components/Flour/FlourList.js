import { Box } from "@mui/material";
import { flour } from "../../Utils/product";
import Flour from "./Flour";

export const FlourList = () => {
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
        {flour.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Flour data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FlourList;
