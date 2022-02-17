import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import ScrollToTop from 'react-scroll-to-top'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="недвижимость" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
            <ScrollToTop />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 550px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
