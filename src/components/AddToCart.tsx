import React, { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { SingleProduct } from "../context/products_context";
import LinkBtn from "./LinkBtn";

const AddToCart: FC<{ product: SingleProduct }> = ({ product }) => {
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

        <LinkBtn text="add to cart" url="/cart"></LinkBtn>
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
