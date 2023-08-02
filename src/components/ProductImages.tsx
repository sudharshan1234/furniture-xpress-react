import { FC, useState } from "react";
import { Image } from "../context/products_context";
import styled from "styled-components";

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

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
