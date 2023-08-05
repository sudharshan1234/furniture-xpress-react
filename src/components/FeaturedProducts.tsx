import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import LinkBtn from "./LinkBtn";

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
    <section className="bg-grey-1000 py-20 px-0">
      <div className="text-center">
        <h2 className="tracking-widest mb-3 capitalize text-3xl">
          featured products
        </h2>
        <div className="w-24 h-1 bg-primary-500 ml-auto mr-auto"></div>
      </div>
      <div className="w-[90vw] max-w[1170px] lg:w-[95vw] my-16 mx-auto grid gap-10 sg:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
        {featured.slice(0, 3).map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <div className="grid place-items-center">
        <LinkBtn url="/products" text="all products"></LinkBtn>
      </div>
    </section>
  );
};

export default FeaturedProducts;
