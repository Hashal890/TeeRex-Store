import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../Assets/info";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      top={0}
      position={"sticky"}
      zIndex={5000000}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={"/"}>TeeRex Store</Link>
        <Box display={{ md: "none" }}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
            mr={2}
          />
          <Button onClick={toggleColorMode} colorScheme={"teal"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        <HStack gap={3} display={{ base: "none", md: "flex" }}>
          <Link to={"/"}>Products</Link>
          <Link to={"/cart"}>
            <IconButton
              aria-label="Cart Page"
              icon={<AiOutlineShoppingCart />}
              colorScheme={"telegram"}
            />
          </Link>
          <Button onClick={toggleColorMode} colorScheme={"teal"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {NavbarLinks.map((el) => (
              <Link to={el.link} key={el.id}>
                {el.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
