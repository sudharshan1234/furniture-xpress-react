import React, { FC } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
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

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
