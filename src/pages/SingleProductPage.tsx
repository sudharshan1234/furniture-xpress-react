import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";

import LinkBtn from "../components/LinkBtn";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isSingleProductLoading: loading,
    isSingleProductError: error,
    fetchSingleProduct,
    singleProduct: product,
  } = useProductsContext();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (product) {
    const {
      name,
      price,
      description,
      stock,
      stars,
      reviews,
      id: sku,
      company,
      images,
    } = product;

    return (
      <main>
        <PageHero title={name} product={true}></PageHero>
        <div className="w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw] py-5 px-0 min-h-[calc(100vh-(20vh+10rem))]">
          <LinkBtn text="back to products" url="/products"></LinkBtn>
          <div className="grid gap-16 mt-8 lg:grid-cols-2 items-center">
            <ProductImages images={images}></ProductImages>
            <section>
              <h2 className="tracking-widest mb-3 capitalize text-3xl">
                {name}
              </h2>
              <Stars stars={stars} reviews={reviews}></Stars>
              <h5 className="text-primary-500 text-xl">{formatPrice(price)}</h5>
              <p className="leading-loose max-w-[45em]">{description}</p>
              <p className="capitalize w-[300px] grid grid-cols-[125px_1fr]">
                <span className="font-bold">Available: </span>
                {stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <p className="capitalize w-[300px] grid grid-cols-[125px_1fr]">
                <span className="font-bold">SKU: </span>
                {sku}
              </p>
              <p className="capitalize w-[300px] grid grid-cols-[125px_1fr]">
                <span className="font-bold">Brand: </span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={product}></AddToCart>}
            </section>
          </div>
        </div>
      </main>
    );
  }
  return null;
};

export default SingleProductPage;
