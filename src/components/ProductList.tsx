import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length === 0) {
    return (
      <h5 className="font-bold">Sorry, No products matched your search..</h5>
    );
  }
  return grid_view ? (
    <GridView products={products}></GridView>
  ) : (
    <ListView products={products}></ListView>
  );
};

export default ProductList;
