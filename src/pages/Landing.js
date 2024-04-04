import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import { ProductContextProvider } from "../context/productContext";
import ProductModal from "../components/ProductsModal";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

function Landing() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ProductContextProvider>
      <Box sx={{ backgroundColor: "#F1F1F2" }}>
        <Box>
          <ProductModal showModal={showModal} setShowModal={setShowModal} />
          <Navbar setShowModal={setShowModal} />
          <Header />
          <Body />
        </Box>
        <Footer />
      </Box>
    </ProductContextProvider>
  );
}

export default Landing;
