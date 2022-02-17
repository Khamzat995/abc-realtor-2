import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { useTranslation } from 'react-i18next';

const FeaturedProducts = () => {

  const { t } = useTranslation()

  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h3>{t('featured-title')}</h3>

        <div className="underline"/>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 6).map((product) => {
          const { _id } = product;
          return <Product {...product} key={ _id } />
        })}
      </div>
      <Link to="/products" className="btn hero-btn">
        {t('featured-btn')}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 30px;
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  h3 {
    text-transform: none;
  }
  .btn {
    display: block;
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    width: 200px;
    margin-bottom: 50px;
  }
  .hero-btn:hover {
    transform: scale(1.1);
  }


  @media screen and (max-width: 600px) {
    h3 {
      font-size: 22px;
    }
  }
  
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
