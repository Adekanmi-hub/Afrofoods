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
                sm: "body1",
                md: "subtitle1",
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
                sm: "body1",
                md: "subtitle1",
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
              mt: {
                xs: "0.5rem",
                sm: "0.7rem",
                md: "1.2rem",
                lg: "1rem",
                xl: "0.8rem",
              },
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                width: {
                  xs: "0.5rem",
                },
                backgroundColor: "#FF9900",
                padding: {
                  xs: "0.4rem 1.2rem 0rem 0.3rem",
                  md: "0.4rem 1.5rem 0rem 0.5rem",
                },
                textAlign: "center",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
              onClick={() => removeFromCart(id)}
            >
              <IoMdRemove size={14} />
            </Box>
            <input
              className="size-7 text-center"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <Box
              sx={{
                cursor: "pointer",
                width: "0.5rem",
                backgroundColor: "#FF9900",
                textAlign: "center",
                padding: {
                  xs: "0.4rem 1.2rem 0rem 0.3rem",
                  md: "0.4rem 1.5rem 0rem 0.5rem",
                },
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              onClick={() => addToCart(id)}
            >
              <IoMdAdd size={14} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "0.5rem ",
            width: {
              xs: "35%",
              sm: "30%",
              md: "35%",
              xl: "30%",
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
