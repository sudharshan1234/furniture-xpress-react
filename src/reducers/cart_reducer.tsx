import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import { Products, SingleProduct } from "../context/products_context";

const cart_reducer = (
  state: {
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
  },
  action: {
    type: string;
    payload?: {
      id?: string;
      color?: string;
      amount?: number;
      product?: SingleProduct;
      value?: string;
    };
  },
): {
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
} => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload!;
    const tempItem = state.cart.find((item) => item.id === id! + color!);
    if (tempItem) {
      const tempCart = state.cart.map((c) => {
        if (c.id === id! + color!) {
          let newAmount = c.amount + amount!;
          if (newAmount > c.max) {
            newAmount = c.max;
          }
          return { ...c, amount: newAmount };
        }
        return c;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id! + color!,
        name: product!.name,
        color: color!,
        amount: amount!,
        image: product!.images[0].url,
        price: product!.price,
        max: product!.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((c) => c.id !== action.payload?.id);

    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const id = action.payload!.id!;
    const value = action.payload!.value!;

    const tempCart = state.cart.map((c) => {
      if (c.id === id) {
        if (value === "inc") {
          return { ...c, amount: c.amount + 1 > c.max ? c.max : c.amount + 1 };
        }
        if (value === "dec") {
          return { ...c, amount: c.amount - 1 < 1 ? 1 : c.amount - 1 };
        }
      }
      return c;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      { total_items: 0, total_amount: 0 },
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
