import React, { FC } from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const AmountButtons: FC<{
  amount: number;
  increase: () => void;
  decrease: () => void;
}> = ({ amount, increase, decrease }) => {
  return (
    <div className='grid w-[100px] justify-center grid-cols-3 items-center'>
      <button
        type='button'
        className='bg-opacity-0 border-opacity-0 cursor-pointer  px-0 w-8 h-4 text-center flex items-center justify-center text-xs'
        onClick={decrease}
      >
        <FaMinus></FaMinus>
      </button>
      <h2 className='mb-0 text-2xl text-center'>{amount}</h2>
      <button
        type='button'
        className='bg-opacity-0 border-opacity-0 cursor-pointer  px-0 w-8 h-4 text-center flex items-center justify-center text-xs'
        onClick={increase}
      >
        <FaPlus></FaPlus>
      </button>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
