import { Box, Typography } from "@mui/material";
import FlourList from "./Flour/FlourList";
import PastaList from "./Pasta/PastaList";
import SpicesList from "./Spices/SpicesList";
import DrinkList from "./Drink/DrinkList";
import OthersList from "./Others/OthersList";

export const Category = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
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

      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#FF9900",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            FLOURS
          </Typography>
        </Box>
        <FlourList />
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#FF9900",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            PASTA
          </Typography>
        </Box>
        <PastaList />
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#FF9900",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            SPICES
          </Typography>
        </Box>
        <SpicesList />
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#FF9900",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            DRINKS
          </Typography>
        </Box>
        <DrinkList />
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#FF9900",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            OTHERS
          </Typography>
        </Box>
        <OthersList />
      </Box>
    </Box>
  );
};

export default Category;
