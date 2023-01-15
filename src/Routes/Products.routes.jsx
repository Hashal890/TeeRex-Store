import React, { useContext, useState } from "react";
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
  const [searchText, setSearchText] = useState("");

  const { realData, updatedData } = state;

  // console.log(state, setState);
  // console.log(searchText.toLowerCase());

  const searchData = () => {
    // console.log("inside");
    const data = realData.filter((el) => {
      let sampleArr = Object.values(el);
      let isPresent = false;
      for (let index = 0; index < sampleArr.length; index++) {
        const element = sampleArr[index].toString();
        // console.log(element);
        if (element.toLowerCase() === searchText.toLowerCase()) {
          isPresent = true;
          break;
        }
      }
      if (isPresent) return el;
    });
    // console.log(data, "data");
    setState({...state, updatedData: data});
  };

  return (
    <Box px={[2, 0, 4, 20]}>
      <HStack justifyContent={"center"} alignItems={"center"} gap={2} my={6}>
        <Input
          placeholder={"Search for products..."}
          maxW={"400px"}
          variant="flushed"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton
          aria-label="Cart Page"
          icon={<ImSearch />}
          colorScheme={"twitter"}
          onClick={searchData}
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
