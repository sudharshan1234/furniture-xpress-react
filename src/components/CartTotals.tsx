import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <section className="mt-12 flex justify-center md:justify-end">
      <div>
        <article className="border-[1px] border-solid border-grey-800 rounded py-6 px-12">
          <h5 className="grid grid-cols-[200px_1fr]">
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="grid grid-cols-[200px_1fr] capitalize">
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className="grid grid-cols-[200px_1fr] mt-8">
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link
            to="/checkout"
            className="uppercase bg-primary-500 text-primary-1000 py-1 px-3 tracking-widest inline-block transition-all text-xs cursor-pointer shadow rounded border-opacity-0 hover:text-primary-100 hover:bg-primary-700 w-full mt-4 text-center font-bold"
          >
            proceed to checkout
          </Link>
        ) : (
          <button
            className="uppercase bg-primary-500 text-primary-1000 py-1 px-3 tracking-widest inline-block font-normal transition-all text-xs cursor-pointer shadow rounded border-opacity-0 hover:text-primary-100 hover:bg-primary-700"
            type="button"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
