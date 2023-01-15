import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { initFilter } from "../Assets/info";

const LeftSideBar = () => {
  const [filters, setFilters] = useState(initFilter);

  const setColorFilter = (e) => {
    const { name } = e.target;

    setFilters({
      ...filters,
      colorFilter: {
        ...filters.colorFilter,
        [name]: !filters.colorFilter[name],
      },
    });
  };

  useEffect(() => {
    // console.log(filters);
    
  }, [filters]);

  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      px={8}
      py={4}
      w={"350px"}
      h={"fit-content"}
      m={["0", "auto", "0", "0"]}
    >
      <Box>
        <Text fontWeight={700} fontSize={"18px"}>
          Colour
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox colorScheme={"red"} name={"red"} onChange={setColorFilter}>
            Red
          </Checkbox>
          <Checkbox
            colorScheme={"blue"}
            name={"blue"}
            onChange={setColorFilter}
          >
            Blue
          </Checkbox>
          <Checkbox
            colorScheme={"green"}
            name={"green"}
            onChange={setColorFilter}
          >
            Green
          </Checkbox>
        </VStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight={700} fontSize={"18px"}>
          Gender
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox>Men</Checkbox>
          <Checkbox>Women</Checkbox>
        </VStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight={700} fontSize={"18px"}>
          Price
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox>0 - Rs250</Checkbox>
          <Checkbox>Rs251 - Rs450</Checkbox>
          <Checkbox>Rs450</Checkbox>
        </VStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight={700} fontSize={"18px"}>
          Type
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox>Polo</Checkbox>
          <Checkbox>Hoodie</Checkbox>
          <Checkbox>Basic</Checkbox>
        </VStack>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
