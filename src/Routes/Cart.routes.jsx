import React, { useContext } from "react";
import { Box, Table, Tbody, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import CartCard from "../Components/CartCard";

const Cart = () => {
  const { state } = useContext(AppContext);

  return (
    <Box>
      <Text mx={10} my={6} fontWeight={"bold"} fontSize={"18px"}>
        Shopping Cart
      </Text>
      <Table variant="simple">
        <Tbody>
          {state.cartData.map((el) => (
            <CartCard key={el.id} {...el} />
          ))}
        </Tbody>
      </Table>
      <Text textAlign={"center"} mt={4}>Total amount:- {state.total}</Text>
    </Box>
  );
};

export default Cart;
