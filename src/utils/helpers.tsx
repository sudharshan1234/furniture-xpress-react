import { Products } from "../context/products_context";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  }).format(price / 100);
};

export const getUniqueValues = (all_products: Products[], key: string) => {
  if (key === "category")
    return ["all", ...new Set(all_products.map((prod) => prod.category))];
  if (key === "colors")
    return [
      "all",
      ...new Set([...all_products.map((prod) => prod.colors)].flat()),
    ];
  if (key === "company")
    return ["all", ...new Set(all_products.map((prod) => prod.company))].flat();
  return [];
};
