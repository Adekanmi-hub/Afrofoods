import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { Box, Typography } from "@mui/material";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const CartProductModal = (props) => {
  const { id, Name, Price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(productContext);
  return (
    <Box
      sx={{
        mt: "0.5rem",
        border: "1px solid black",
        borderRadius: "2px",
        padding: "0.1rem 0rem 0.3rem 0.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            fontFamily="inter"
            sx={{
              typography: {
                xs: "body2",
                md: "body2",
                lg: "body1",
                xl: "body1",
              },
              fontWeight: {
                xs: "500",
              },
            }}
          >
            {Name}
          </Typography>
          <Typography
            fontFamily="inter"
            sx={{
              typography: {
                xs: "body2",
                md: "body2",
                lg: "body1",
                xl: "body1",
              },
              fontWeight: {
                xs: "500",
              },
            }}
          >
            ${Price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                width: "0.5rem",
                backgroundColor: "#FF9900",
                padding: {
                  xs: "0.5rem 1.5rem 0rem 0.5rem",
                  md: "0rem 1.5rem 0rem 0.5rem",
                },
                textAlign: "center",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
              onClick={() => removeFromCart(id)}
            >
              <IoMdRemove />
            </Typography>
            <input
              className="size-7 text-center"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                width: "0.5rem",
                backgroundColor: "#FF9900",
                padding: "0rem 1rem 0rem 0.5rem",
                textAlign: "center",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              onClick={() => addToCart(id)}
            >
              <IoMdAdd />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "0.5rem ",
            width: {
              xs: "35%",
            },
          }}
        >
          <img
            src={image}
            width="100%"
            className=" xl:w-20"
            height="auto"
            alt="/"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartProductModal;
