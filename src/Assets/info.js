import data from "../Assets/data.json";

export const NavbarLinks = [
  {
    id: 1,
    link: "/",
    name: "Products",
  },
  {
    id: 1,
    link: "/cart",
    name: "Cart",
  },
];

export const initState = {
  realData: data,
  updatedData: data,
  cartData: [],
  total: 0,
};

export const initFilter = {
  colorFilter: { red: false, green: false, blue: false },
  genderFilter: { men: false, women: false },
  priceFilter: { 250: false, 251: false, 450: false },
  typeFilter: { polo: false, hoodie: false, basic: false },
};

export const INCREMENT = "INCREMENT_ITEM";
export const DECREMENT = "DECREMENT_ITEM";
export const DELETE = "DELETE_ITEM";
