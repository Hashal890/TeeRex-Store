import React, { useRef } from "react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ImFilter } from "react-icons/im";
import LeftSideBar from "./LeftSideBar";

const FiltersModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        ref={btnRef}
        colorScheme={"twitter"}
        onClick={onOpen}
        icon={<ImFilter />}
        size={"md"}
      />
      <Drawer
        isOpen={isOpen}
        placement={"right"}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={16} textAlign={"center"}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text>Add Filters</Text>
              <Button onClick={onClose} textAlign={"right"} colorScheme={"red"}>
                Close
              </Button>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <LeftSideBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default FiltersModal;
