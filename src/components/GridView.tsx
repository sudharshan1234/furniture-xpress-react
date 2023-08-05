import { FC } from "react";
import Product from "./Product";
import { Products } from "../context/products_context";

const GridView: FC<Props> = ({ products }) => {
  return (
    <section>
      <div className="grid gap-y-8 gap-x-6 lg:grid-cols-2 xg:grid-cols-3">
        {products.map((product) => {
          return <Product {...product} key={product.id}></Product>;
        })}
      </div>
    </section>
  );
};

interface Props {
  products: Products[];
}

export default GridView;
