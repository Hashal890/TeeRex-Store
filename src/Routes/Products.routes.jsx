import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";

const Products = () => {
  const { state, updateState } = useContext(AppContext);

  // console.log(state, updateState);

  return <Box>Products</Box>;
};

export default Products;
