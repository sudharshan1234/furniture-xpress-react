import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  console.log(colors);

  return (
    <section>
      <div className="md:sticky md:top-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* search input */}
          <input
            type="text"
            name="text"
            placeholder="search"
            className="p-2 bg-grey-1000 rounded border-opacity-0 tracking-tighter placeholder:capitalize"
            value={text}
            onChange={updateFilters}
          />
          {/* end search input */}
          {/* categories */}
          <div className="mb-5">
            <h5 className="mb-2">
              <div>
                {categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      className={`block my-1 mx-0 py-1 px-0 capitalize bg-opacity-0 border-solid border-opacity-0 tracking-widest text-grey-500 cursor-pointer ${
                        c === category ? "border-b-[1px]" : ""
                      }`}
                      onClick={updateFilters}
                      name="category"
                      type="button"
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </h5>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className="mb-5">
            <h5 className="mb-2">company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="bg-grey-1000 rounded border-opacity-0 p-1"
            >
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className="mb-5">
            <h5 className="mb-2">color</h5>
            <div className="flex items-center">
              {colors.map((c, index) => {
                return c == "all" ? (
                  <button
                    key={index}
                    name="color"
                    data-color="all"
                    onClick={updateFilters}
                    className={`flex items-center justify-center mr-2 ${
                      color === c ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    All
                  </button>
                ) : (
                  <button
                    key={index}
                    name="color"
                    style={{ backgroundColor: c }}
                    className={`w-6 h-6 rounded-full mr-2 border-none cursor-pointer flex items-center justify-center text-xs text-white bg-[#222] ${
                      color === c ? "opacity-100" : "opacity-50"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {c === color ? <FaCheck></FaCheck> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="mb-5">
            <h5 className="mb-2">price</h5>
            <p className="mb-1">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="mb-5 grid grid-cols-[auto_1fr] place-items-center capitalize gap-x-2 text-sm max-w-[200px]">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button
          type="button"
          className="bg-red-dark text-white py-1 px-2 rounded capitalize"
          onClick={clearFilters}
        >
          clear filters
        </button>
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
