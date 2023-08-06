import { FC } from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons: FC<{ style: string }> = ({ style }) => {
  const { closeSideBar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className={`grid-cols-2 items-center w-56 ${style}`}>
      <Link
        to="/cart"
        className="text-grey-100 text-2xl tracking-widest flex items-center"
        onClick={closeSideBar}
      >
        Cart
        <span className="flex items-center relative">
          <span className="h-7 ml-1">
            <FaShoppingCart></FaShoppingCart>
          </span>
          <span className="absolute top-[-10px] right-[-16px] bg-primary-500 w-4 h-4 flex items-center justify-center rounded-2xl text-xs text-white p-3">
            {total_items}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="flex items-center bg-opacity-0 border-opacity-0 text-2xl text-grey-100 cursor-pointer tracking-widest"
          onClick={() => {
            clearCart();
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          Logout
          <span className="ml-1">
            <FaUserMinus></FaUserMinus>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center bg-opacity-0 border-opacity-0 text-2xl text-grey-100 cursor-pointer tracking-widest"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
          <span className="ml-1">
            <FaUserPlus></FaUserPlus>
          </span>
        </button>
      )}
    </div>
  );
};

export default CartButtons;
