import React, { useContext } from "react";
import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import { ImSearch } from "react-icons/im";
import LeftSideBar from "../Components/LeftSideBar";

const Products = () => {
  const { state, updateState } = useContext(AppContext);

  // console.log(state, updateState);

  return (
    <Box px={[2, 0, 4, 20]}>
      <HStack justifyContent={"center"} alignItems={"center"} gap={2} my={6}>
        <Input
          placeholder={"Search for products..."}
          maxW={"400px"}
          variant="flushed"
        />
        <IconButton
          aria-label="Cart Page"
          icon={<ImSearch />}
          colorScheme={"twitter"}
        />
      </HStack>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        m={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LeftSideBar />
      </Flex>
    </Box>
  );
};

export default Products;
