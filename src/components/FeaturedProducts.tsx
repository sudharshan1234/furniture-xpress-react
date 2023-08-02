import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className='bg-grey-1000 py-20 px-0'>
      <div className='text-center'>
        <h2 className='tracking-widest mb-3 capitalize text-3xl'>
          featured products
        </h2>
        <div className='w-24 h-1 bg-primary-500 ml-auto mr-auto'></div>
      </div>
      <div className='w-[90vw] max-w[1170px] lg:w-[95vw] my-16 mx-auto grid gap-10 sg:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]'>
        {featured.slice(0, 3).map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
