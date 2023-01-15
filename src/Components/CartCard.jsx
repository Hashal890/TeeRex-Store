import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { DECREMENT, DELETE, INCREMENT } from "../Assets/info";
import { AppContext } from "../Context/AppContext";

const CartCard = (el) => {
  const { state, setState } = useContext(AppContext);
  const { id, imageURL, name, price, qty, quantity } = el;

  const cartFunctionalOperations = (val) => {
    switch (val) {
      case INCREMENT: {
        const data = state.cartData.filter((el) => el.id !== id);
        setState({
          ...state,
          cartData: [...data, { ...el, qty: qty + 1 }],
          total: state.total + price,
        });
        break;
      }
      case DECREMENT: {
        const data = state.cartData.filter((el) => el.id !== id);
        setState({
          ...state,
          cartData: [...data, { ...el, qty: qty - 1 }],
          total: state.total - price,
        });
        break;
      }
      case DELETE: {
        const data = state.cartData.filter((el) => el.id !== id);
        setState({
          ...state,
          cartData: data,
          total: state.total - price * qty,
        });
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Tr>
      <Td>
        <Avatar src={imageURL} borderRadius={0} name={name} size={"lg"} />
      </Td>
      <Td>
        <Text fontWeight={"bold"} fontSize={"18px"}>
          {name}
        </Text>
        <Text>Rs. {price}</Text>
      </Td>
      <Td>
        <ButtonGroup size={"sm"} isAttached variant={"outline"}>
          <IconButton
            icon={<MinusIcon />}
            disabled={qty === 1}
            onClick={() => cartFunctionalOperations(DECREMENT)}
          />
          <Button disabled={true}>{qty}</Button>
          <IconButton
            icon={<AddIcon />}
            disabled={qty === quantity}
            onClick={() => cartFunctionalOperations(INCREMENT)}
          />
        </ButtonGroup>
      </Td>
      <Td>
        <Button
          colorScheme={"red"}
          onClick={() => cartFunctionalOperations(DELETE)}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default CartCard;
