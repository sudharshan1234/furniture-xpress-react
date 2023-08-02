import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { Products } from "../context/products_context";

const filter_reducer = (
  state: {
    filtered_products: Products[];
    all_products: Products[];
    grid_view: boolean;
    sort: string;
    filters: {
      text: string;
      company: string;
      category: string;
      color: string;
      min_price: number;
      max_price: number;
      price: number;
      shipping: boolean;
    };
  },
  action: {
    type: string;
    payload?: {
      products?: Products[];
      sortValue?: string;
      filterValue?: string;
      filterName?: string;
    };
  },
) => {
  if (action.type === LOAD_PRODUCTS) {
    const tmpProducts = action.payload?.products
      ? action.payload?.products
      : [];
    const maxPrice = Math.max(...tmpProducts.map((p) => p.price));
    return {
      ...state,
      filtered_products: [...tmpProducts],
      all_products: [...tmpProducts],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload!.sortValue
        ? action.payload!.sortValue
        : "price-lowest",
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { filtered_products, sort } = state;
    let tmpProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tmpProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tmpProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tmpProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tmpProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tmpProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const name = action?.payload?.filterName!;
    const value = action?.payload?.filterValue!;

    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    let tmpProducts = [...state.all_products];
    const { color, text, category, company, price, shipping } = state.filters;

    if (text != "") {
      tmpProducts = tmpProducts.filter((prod) =>
        prod.name.toLowerCase().startsWith(text),
      );
    }
    if (category !== "all") {
      tmpProducts = tmpProducts.filter((prod) => prod.category === category);
    }
    if (company !== "all") {
      tmpProducts = tmpProducts.filter((prod) => prod.company === company);
    }
    if (color !== "all") {
      tmpProducts = tmpProducts.filter((prod) =>
        prod.colors.find((c) => c === color),
      );
    }
    tmpProducts = tmpProducts.filter((prod) => prod.price <= price);
    if (shipping) {
      tmpProducts = tmpProducts.filter((prod) => prod.shipping);
    }
    return {
      ...state,
      filtered_products: tmpProducts,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
