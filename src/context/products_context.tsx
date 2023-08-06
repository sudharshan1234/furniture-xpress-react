import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState: {
  isSideBarOpen: boolean;
  productsLoading: boolean;
  productsError: boolean;
  products: Products[];
  featuredProducts: Products[];
  isSingleProductLoading: boolean;
  isSingleProductError: boolean;
  singleProduct: SingleProduct | null;
} = {
  isSideBarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  isSingleProductError: false,
  singleProduct: null,
};
interface Props {
  children: React.ReactNode;
}
const ProductsContext = React.createContext<ProductsContext>({
  ...initialState,
  closeSideBar: () => {},
  openSideBar: () => {},
  fetchSingleProduct: () => new Promise<void>(() => {}),
});

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url: string) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products: Products[] = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct: SingleProduct = response.data;
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: { singleProduct },
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSideBar, closeSideBar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

interface ProductsContext {
  openSideBar: () => void;
  closeSideBar: () => void;
  fetchSingleProduct: (url: string) => Promise<void>;
  productsLoading: boolean;
  productsError: boolean;
  products: Products[];
  featuredProducts: Products[];
  isSideBarOpen: boolean;
  isSingleProductLoading: boolean;
  isSingleProductError: boolean;
  singleProduct: SingleProduct | null;
}

export interface Products {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
}

export interface SingleProduct {
  id: string;
  stock: number;
  price: number;
  shipping: boolean;
  colors: string[];
  category: string;
  images: Image[];
  reviews: number;
  stars: number;
  name: string;
  description: string;
  company: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

interface Thumbnails {
  small: Size;
  large: Size;
  full: Size;
}

interface Size {
  url: string;
  width: number;
  height: number;
}
