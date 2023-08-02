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
import { Products, SingleProduct } from "../context/products_context";

const products_reducer = (
  state: {
    isSideBarOpen: boolean;
    productsLoading: boolean;
    productsError: boolean;
    products: Products[];
    featuredProducts: Products[];
    isSingleProductLoading: boolean;
    isSingleProductError: boolean;
    singleProduct: SingleProduct | null;
  },
  action: {
    type: string;
    payload?: { products?: Products[]; singleProduct?: SingleProduct };
  }
) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log("opening");

    return { ...state, isSideBarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      productsLoading: true,
      productsError: false,
      products: [],
      featuredProducts: [],
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products: Products[] = action.payload?.products
      ? action.payload.products
      : [];
    return {
      ...state,
      productsLoading: false,
      productsError: false,
      products: products,
      featuredProducts: products?.filter((prod) => prod.featured),
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      productsLoading: false,
      productsError: true,
      products: [],
      featuredProducts: [],
    };
  }
  if (action.type == GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      isSingleProductLoading: true,
      isSingleProductError: false,
      singleProduct: null,
    };
  }
  if (action.type == GET_SINGLE_PRODUCT_SUCCESS) {
    const singleProduct = action.payload?.singleProduct
      ? action.payload?.singleProduct
      : null;

    return {
      ...state,
      isSingleProductLoading: false,
      isSingleProductError: false,
      singleProduct: singleProduct,
    };
  }
  if (action.type == GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      isSingleProductLoading: false,
      isSingleProductError: true,
      singleProduct: null,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
