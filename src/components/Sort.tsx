import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
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

export default Sort;
