import { Box, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { productContext } from "../../context/productContext";
import { useContext } from "react";

const Flour = (props) => {
  const { id, Name, Price, image } = props.data;
  const { addToCart, cartItems } = useContext(productContext);
  const cartItemCount = cartItems[id];
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #c0c0c1",
          borderRadius: "8px",
          padding: "0.1rem",
          ":hover": {
            boxShadow: "2px 2px 10px 0px grey",
            transition: "2s ease",
            borderRadius: "3px",
            width: "350",
            height: "auto",
            cursor: "pointer",
          },
        }}
      >
        <img
          src={image}
          width="100%"
          height="auto"
          className=" rounded-xl"
          alt=""
        />
        <Box
          sx={{
            padding: {
              xs: "0.4rem 0.2rem",
              sm: "0.4rem 0.2rem",
              md: "0.5rem",
            },
          }}
        >
          <Typography
            sx={{
              typography: {
                xs: "body2",
                md: "body2",
                lg: "body1",
                xl: "body1",
              },
              fontWeight: {
                xs: "500",
                md: "500",
              },
            }}
          >
            {Name}
          </Typography>
          <Typography
            color="#1A76D2"
            sx={{
              typography: {
                xs: "body2",
                md: "body2",
                lg: "body1",
                xl: "h6",
              },
              fontWeight: {
                xs: "600",
                md: "500",
                sm: "700",
              },
            }}
          >
            ${Price}
          </Typography>
          <Button
            size="small"
            fullWidth
            variant="contained"
            onClick={() => {
              addToCart(id);
              Swal.fire({
                toast: true,
                icon: "success",
                title: "Item selected",
                position: "top",
                timer: 3000,
                showConfirmButton: false,
              });
            }}
            sx={{
              textDecoration: "none",
              mt: "1rem",

              color: "white",
              backgroundColor: "#FF7801",
              "&:hover": {
                backgroundColor: "black",
              },
              typography: {
                xs: "body2",
                md: "body2",
                lg: "body1",
                xl: "body1",
              },
              fontSize: {
                sm: 11,
              },
            }}
          >
            Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Flour;
