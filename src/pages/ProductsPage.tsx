import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title={"products"}></PageHero>
      <div className="min-h-[calc(100vh-(20vh+10rem))]">
        <div className="w-90vw my-16 py-20 px-2 mx-auto max-w-[1170px] grid gap-y-12 gap-x-6 md:grid-cols-[200px_1fr]">
          <Filters></Filters>
          <div>
            <Sort></Sort>
            <ProductList></ProductList>
          </div>
        </div>
      </div>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
