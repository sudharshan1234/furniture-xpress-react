import { FC } from "react";
import { formatPrice } from "../utils/helpers";
import { Products } from "../context/products_context";
import LinkBtn from "./LinkBtn";
const ListView: FC<Props> = ({ products }) => {
  return (
    <section className="grid gap-y-12">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img
              src={image}
              alt={name}
              className="block w-[300px] h-[200px] object-cover rounded mb-4"
            />
            <div>
              <h4 className="mb-2 capitalize font-bold text-2xl">{name}</h4>
              <h5 className="text-primary-600 mb-3">{formatPrice(price)}</h5>
              <p className="max-w-[45em] mb-4">
                {description.substring(0, 150)}...
              </p>
              <LinkBtn url={`/products/${id}`} text="details"></LinkBtn>
            </div>
          </article>
        );
      })}
    </section>
  );
};

interface Props {
  products: Products[];
}
export default ListView;
