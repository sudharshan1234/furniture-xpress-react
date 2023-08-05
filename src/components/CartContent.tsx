import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import LinkBtn from "./LinkBtn";

const CartContent = () => {
  const { clearCart, cart } = useCartContext();
  return (
    <section className="py-5 px-0 w-[90vw] my-0 mx-auto max-w-[1170px]">
      <CartColumns></CartColumns>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })}
      <hr />
      <div className="flex justify-between mt-8">
        <LinkBtn url="/products" text="continue shopping"></LinkBtn>
        <button
          type="button"
          className="tracking-widest inline-block font-normal transition-all text-xs cursor-pointer shadow border-opacity-0 hover:text-primary-100 hover:bg-primary-700 bg-red-dark text-white py-1 px-2 rounded capitalize"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals></CartTotals>
    </section>
  );
};
export default CartContent;
