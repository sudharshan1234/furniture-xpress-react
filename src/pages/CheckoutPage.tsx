import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import LinkBtn from "../components/LinkBtn";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout"></PageHero>
      <div className="min-h-[calc(100vh-(20vh+10rem))] flex items-center justify-center">
        {cart.length < 1 ? (
          <div className="text-center">
            <h2 className="mb-4">your cart is empty</h2>
            <LinkBtn url="/products" text="fill it"></LinkBtn>
          </div>
        ) : (
          <StripeCheckout></StripeCheckout>
        )}
      </div>
    </main>
  );
};
export default CheckoutPage;
