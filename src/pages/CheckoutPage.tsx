import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout'></PageHero>
      <div className='min-h-[calc(100vh-(20vh+10rem))]'>
        <h1 className='text-4xl capitalize '>checkout here</h1>
      </div>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
