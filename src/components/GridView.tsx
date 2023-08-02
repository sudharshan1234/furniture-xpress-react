import React, { FC } from "react";
import styled from "styled-components";
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

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
