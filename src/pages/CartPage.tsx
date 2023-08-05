import { useCartContext } from "../context/cart_context";
import { CartContent, PageHero } from "../components";
import LinkBtn from "../components/LinkBtn";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length === 0) {
    return (
      <main className="min-h-[calc(100vh-10rem)] py-20 px-0">
        <div className="text-center">
          <h2 className="mb-4">Your cart is empty</h2>
          <LinkBtn url="/products" text="fill it"></LinkBtn>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart"></PageHero>
      <main className="min-h-[calc(100vh-(20vh+10rem))]">
        <CartContent></CartContent>
      </main>
    </main>
  );
};

export default CartPage;
