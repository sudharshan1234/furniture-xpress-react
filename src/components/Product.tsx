import React, { FC } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Products } from "../context/products_context";

const Product: FC<Products> = ({ image, name, price, id }) => {
  return (
    <article>
      <div className='relative bg-black rounded group'>
        <img
          src={image}
          alt={name}
          className='group-hover:opacity-50 w-full block object-cover rounded transition-all h-[225px]'
        />
        <Link
          to={`/products/${id}`}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 flex items-center justify-center w-10 h-10 rounded-full transition-all opacity-0 cursor-pointer text-xl text-white group-hover:opacity-100'
        >
          <FaSearch />
        </Link>
      </div>
      <footer className='mt-4 flex justify-between items-center'>
        <h5 className='mb-0 font-normal capitalize'>{name}</h5>
        <p className='mb-0 font-normal text-primary-500 tracking-widest'>
          {formatPrice(price)}
        </p>
      </footer>
    </article>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
