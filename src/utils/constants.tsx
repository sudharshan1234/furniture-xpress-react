import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Redefining Spaces with Artistic Customization, crafting furniture that speaks to the heart and soul of every home.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Elevating Homes, Inspiring Lifestyles with Timeless Elegance. Transforming Spaces, Enriching Lives with Exquisite Customization.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "A Legacy of Craftsmanship and Innovation since 1999. Redefining Spaces and Enriching Lives with Timeless Elegance.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
