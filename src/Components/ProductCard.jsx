import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const ProductCard = ({ id, imageURL, name, price, color, gender }) => {
  const { state, setState } = useContext(AppContext);
  const [disabled, setDisabled] = useState(false);

  const addToCartFunction = () => {
    let newItem = state.updatedData.filter((el) => el.id === id);
    // console.log(newItem[0]);
    let isPresent = state.cartData.filter((el) => el.id === id);
    if (isPresent.length === 0) {
    //   console.log("inside 0");
      setState({
        ...state,
        cartData: [...state.cartData, { ...newItem[0], qty: 1 }],
      });
    } else {
    //   console.log("final");
    //   console.log("hello", isPresent[0]["qty"] + 1, isPresent[0]["quantity"]);
      let data = state.cartData.filter((el) => el.id !== id);
      setState({
        ...state,
        cartData: [...data, { ...newItem[0], qty: isPresent[0]["qty"] + 1 }],
      });
      if (isPresent[0]["qty"] + 1 === isPresent[0]["quantity"]) {
        setDisabled(true);
      }
    }
  };

  return (
    <Box
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
      p={4}
      w={"100%"}
    >
      <Text fontWeight={"bold"} mb={2} fontSize={"18px"}>
        {name}
      </Text>
      <Image src={imageURL} alt={name} borderRadius={10} />
      <HStack justifyContent={"space-between"} alignItems={"center"} mt={4}>
        <Text>Rs {price}</Text>
        <Button
          colorScheme={"teal"}
          onClick={addToCartFunction}
          disabled={disabled}
        >
          Add To Cart
        </Button>
      </HStack>
      <HStack mt={4}>
        <Text>Avaiable for {gender.toLowerCase()} in</Text>
        <Text color={color.toLowerCase()} fontWeight={"bold"}>
          {" "}
          {color.toLowerCase()}
        </Text>
        <Text> colour.</Text>
      </HStack>
    </Box>
  );
};

export default ProductCard;
