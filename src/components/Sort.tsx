import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <section className="grid grid-cols-[auto_auto_1fr_auto] items-center mb-8 md:grid-cols-1 md:gap-y-3 lg:gap-x-8">
      <div className="grid grid-cols-2 gap-x-2 md:w-[50px]">
        <button
          className={` border-black border-solid border-[1px] text-black w-6 rounded h-6 flex items-center justify-center cursor-pointer text-sm ${
            grid_view ? "bg-primary-100 text-white" : ""
          }`}
          type="button"
          onClick={setGridView}
        >
          <BsFillGridFill></BsFillGridFill>
        </button>
        <button
          className={` border-black border-solid border-[1px] text-black w-6 rounded h-6 flex items-center justify-center cursor-pointer text-sm ${
            !grid_view ? "bg-black text-white" : ""
          }`}
          type="button"
          onClick={setListView}
        >
          <BsList></BsList>
        </button>
      </div>
      <p className="mx-2">{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort" className="text-sm capitalize">
          sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="border-opacity-0 text-sm capitalize py-1 px-2"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (A-Z)</option>
          <option value="name-z">name (Z-A)</option>
        </select>
      </form>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
