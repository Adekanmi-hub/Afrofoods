import { Box } from "@mui/material";
import { flour, flour2 } from "../../Utils/product";
import Flour from "./Flour";
import Flour2 from "../Flour2/Flour2";

export const FlourList = () => {
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

      {/* SECOND PRODUCT ROW CONTAINER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: {
            sm: "0rem 0rem 1rem 0rem",
            md: "0rem 0rem 1rem 0rem ",
            lg: "1.5rem 2rem",
            xl: "1.5rem 3rem",
          },
        }}
      >
        {flour2.map((products) => (
          <Box key={products.id}>
            {/* FIRST ITEM CONTAINER */}
            <Flour2 data={products} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FlourList;
