import { FC } from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Products } from "../context/products_context";

const Product: FC<Products> = ({ image, name, price, id }) => {
  return (
    <article>
      <div className="relative bg-black rounded group">
        <img
          src={image}
          alt={name}
          className="group-hover:opacity-50 w-full block object-cover rounded transition-all h-[225px]"
        />
        <Link
          to={`/products/${id}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 flex items-center justify-center w-10 h-10 rounded-full transition-all opacity-0 cursor-pointer text-xl text-white group-hover:opacity-100"
        >
          <FaSearch />
        </Link>
      </div>
      <footer className="mt-4 flex justify-between items-center">
        <h5 className="mb-0 font-normal capitalize">{name}</h5>
        <p className="mb-0 font-normal text-primary-500 tracking-widest">
          {formatPrice(price)}
        </p>
      </footer>
    </article>
  );
};

export default Product;
