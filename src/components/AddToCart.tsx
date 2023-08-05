import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { SingleProduct } from "../context/products_context";

const AddToCart: FC<{ product: SingleProduct }> = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((value) => {
      let tmpVal = value + 1;
      if (tmpVal > stock) {
        tmpVal = stock;
      }
      return tmpVal;
    });
  };

  const decreaseAmount = () => {
    setAmount((value) => {
      let tmpVal = value - 1;
      if (tmpVal < 1) {
        tmpVal = 1;
      }
      return tmpVal;
    });
  };

  return (
    <section className="mt-8">
      <div className="grid grid-cols-[125px_1fr] items-center mb-4 ">
        <span className="capitalize font-bold">colors:</span>
        <div className="flex">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={`w-6 h-6 rounded-full mr-2 border-none cursor-pointer flex items-center justify-center text-xs text-white ${
                  mainColor === color ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => {
                  setMainColor(color);
                }}
              >
                {mainColor === color ? <FaCheck></FaCheck> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-2">
        <AmountButtons
          amount={amount}
          increase={increaseAmount}
          decrease={decreaseAmount}
        ></AmountButtons>

        {/* <LinkBtn text="add to cart" url="/cart"></LinkBtn> */}
        <Link
          to="/cart"
          className="uppercase bg-primary-500 text-primary-1000 py-1 px-3 tracking-widest inline-block font-normal transition-all text-xs cursor-pointer shadow rounded border-opacity-0 hover:text-primary-100 hover:bg-primary-700"
          onClick={() => {
            addToCart(id, mainColor, amount, product);
          }}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
