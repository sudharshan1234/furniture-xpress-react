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

export default Filters;
