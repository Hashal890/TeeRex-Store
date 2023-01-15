import React, { useContext } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import { ImSearch } from "react-icons/im";
import LeftSideBar from "../Components/LeftSideBar";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { state, setState } = useContext(AppContext);

  const { realData, updatedData } = state;

  // console.log(state, setState);

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
        flexDir={["column", "column", "row", "row"]}
        m={"auto"}
        // justifyContent={"center"}
        // alignItems={"center"}
        gap={8}
      >
        <LeftSideBar />
        <SimpleGrid columns={[1, 2, 2, 3]} gap={4} mb={4} px={4}>
          {updatedData.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Products;
