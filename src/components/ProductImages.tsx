import { FC, useState } from "react";
import { Image } from "../context/products_context";

const ProductImages: FC<Props> = ({ images = [] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <section>
      <img
        src={main.url}
        alt="main img"
        className="h-[600px] w-full block rounded object-cover sg:h-[300px] lg:h-[500px]"
      />
      <div className={`mt-4 grid grid-cols-5 gap-x-4`}>
        {images.map((image) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={image.id}
              className={`h-[100px] cursor-pointer sg:h-[50px] lg:h-[75px] ${
                image.id === main.id ? "shadow-primary-500 shadow-lg" : ""
              }`}
              onClick={() => setMain(image)}
            />
          );
        })}
      </div>
    </section>
  );
};

interface Props {
  images: Image[];
}

export default ProductImages;
