import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { initFilter } from "../Assets/info";
import { AppContext } from "../Context/AppContext";

const LeftSideBar = () => {
  const [filters, setFilters] = useState(initFilter);
  const { state, setState } = useContext(AppContext);

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

  const setGenderFilter = (e) => {
    const { name } = e.target;

    setFilters({
      ...filters,
      genderFilter: {
        ...filters.genderFilter,
        [name]: !filters.genderFilter[name],
      },
    });
  };

  const setPriceFilter = (e) => {
    const { name } = e.target;

    setFilters({
      ...filters,
      priceFilter: {
        ...filters.priceFilter,
        [name]: !filters.priceFilter[name],
      },
    });
  };

  const setTypeFilter = (e) => {
    const { name } = e.target;

    setFilters({
      ...filters,
      typeFilter: {
        ...filters.typeFilter,
        [name]: !filters.typeFilter[name],
      },
    });
  };

  useEffect(() => {
    // console.log(filters);
    let filterValues = [];
    for (let key in filters) {
      let val = filters[key];
      for (let check in val) {
        if (val[check]) {
          filterValues.push(check);
        }
      }
    }
    // console.log(filterValues);
    const data = state.realData.filter((el) => {
      let sampleArr = Object.values(el);
      let isPresent = false;
      for (let index = 0; index < sampleArr.length; index++) {
        const element = sampleArr[index].toString();
        // console.log(element);
        if (filterValues.includes(element)) {
          isPresent = true;
          break;
        }
      }
      if (isPresent) return el;
    });
    console.log(data, "data");
    if (data.length > 0) {
      setState({ ...state, updatedData: data });
    }
  }, [filters]);

  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      px={8}
      py={4}
      w={["300px", "300px", "250px"]}
      h={"fit-content"}
      m={["0", "auto", "0", "0"]}
    >
      <Box>
        <Text fontWeight={700} fontSize={"18px"}>
          Colour
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox colorScheme={"red"} name={"Red"} onChange={setColorFilter}>
            Red
          </Checkbox>
          <Checkbox
            colorScheme={"blue"}
            name={"Blue"}
            onChange={setColorFilter}
          >
            Blue
          </Checkbox>
          <Checkbox
            colorScheme={"green"}
            name={"Green"}
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
          <Checkbox onChange={setGenderFilter} name={"Men"}>
            Men
          </Checkbox>
          <Checkbox onChange={setGenderFilter} name={"Women"}>
            Women
          </Checkbox>
        </VStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight={700} fontSize={"18px"}>
          Price
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox onChange={setPriceFilter} name={250}>
            0 - Rs250
          </Checkbox>
          <Checkbox onChange={setPriceFilter} name={251}>
            Rs251 - Rs450
          </Checkbox>
          <Checkbox onChange={setPriceFilter} name={450}>
            Rs450
          </Checkbox>
        </VStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight={700} fontSize={"18px"}>
          Type
        </Text>
        <VStack alignItems={"flex-start"} mt={2} ml={2}>
          <Checkbox onChange={setTypeFilter} name={"Polo"}>
            Polo
          </Checkbox>
          <Checkbox onChange={setTypeFilter} name={"Hoodie"}>
            Hoodie
          </Checkbox>
          <Checkbox onChange={setTypeFilter} name={"Basic"}>
            Basic
          </Checkbox>
        </VStack>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
