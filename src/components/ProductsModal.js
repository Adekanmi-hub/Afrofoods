import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { FiX } from "react-icons/fi";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { productContext } from "../context/productContext";
import { allProducts } from "../Utils/product";
import CartProductModal from "./CartProductModal";

const style = {
  position: "absolute",
  top: "20%",
  left: "87%",
  transform: "translate(-50%, -50%)",
  width: { xs: "75%", sm: 400, xl: "18%" },
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  overflowX: "auto",
  height: "20%",
  display: "block",
};

export const ProductModal = ({ showModal, setShowModal, props }) => {
  const { cartItems, getTotalCartAmount } = useContext(productContext);
  const totalAmount = getTotalCartAmount();

  return (
    <Box>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        disableScrollLock
        hideBackdrop
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: "absolute", top: "0px", right: "0px" }}
            onClick={() => setShowModal(false)}
          >
            <FiX />
          </IconButton>
          <Box>
            {allProducts.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartProductModal key={props} data={product} />;
              }
            })}
          </Box>

          {totalAmount !== 0 ? (
            <Box>
              <Box
                sx={{
                  mt: "0.5rem",
                  borderTop: "2px solid black",
                  borderBottom: "2px solid black",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Subtotal: ${totalAmount}</Typography>
              </Box>
              <Button>Submit</Button>
            </Box>
          ) : (
            <Box>
              <Typography
                variant="Body1"
                sx={{
                  padding: "20px 0px",
                  textAlign: "center",
                }}
              >
                Your cart is empty. Browse our categories to add to your cart.
              </Typography>
              <Box
                sx={{
                  padding: "25px 0px 0px 100px",
                }}
              >
                <FaCartArrowDown size={50} />
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductModal;
