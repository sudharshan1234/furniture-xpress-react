import { FC } from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem: FC<Props> = ({ id, image, name, color, amount, price }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <article className="grid grid-cols-[200px_auto_auto] grid-rows-[75px] gap-y-12 gap-x-4 justify-items-center mb-12 items-center md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
      <div className="grid grid-cols-[75px_125px] grid-rows-[75px] items-center text-left gap-4 md:h-full md:grid-cols-[100px_200px]">
        <img src={image} alt={name} />
        <div>
          <h5 className="text-sm font-bold capitalize">{name}</h5>
          <p className="text-grey-500 text-xs tracking-widest capitalize mb-0 flex items-center justify-start md:text-sm">
            color :{" "}
            <span
              className="inline-block w-2 h-2 bg-red ml-2 rounded"
              style={{ backgroundColor: color }}
            ></span>
          </p>
          <h5 className="text-primary-500 md:hidden">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="hidden md:block md:text-xl text-primary-500 font-normal">
        {formatPrice(price)}
      </h5>
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
      ></AmountButtons>
      <h5 className="hidden md:block md:mb-0 md:text-grey-500 md:text-xl">
        {formatPrice(price * amount)}
      </h5>
      <button
        type="button"
        className="text-white tracking-widest bg-red-dark w-6 h-6 flex items-center justify-center rounded text-xs cursor-pointer"
        onClick={() => {
          removeItem(id);
        }}
      >
        <FaTrash></FaTrash>
      </button>
    </article>
  );
};

interface Props {
  id: string;
  name: string;
  color: string;
  amount: number;
  price: number;
  image: string;
  max: number;
}

export default CartItem;
