import React, { useEffect, useContext, useReducer, FC } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
import { SingleProduct } from "./products_context";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const initialState: {
  cart: {
    id: string;
    name: string;
    color: string;
    amount: number;
    price: number;
    image: string;
    max: number;
  }[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
} = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext<{
  cart: {
    id: string;
    name: string;
    color: string;
    amount: number;
    price: number;
    image: string;
    max: number;
  }[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: SingleProduct,
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
  clearCart: () => void;
}>({
  ...initialState,
  addToCart: () => {},
  removeItem: () => {},
  toggleAmount: () => {},
  clearCart: () => {},
});

export const CartProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // add to cart
  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: SingleProduct,
  ) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // remove item
  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  // toggle amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
