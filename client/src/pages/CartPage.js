import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";

const CartPage = () => {
  const { t } = useTranslation()
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <Helmet>
          <title>Избранное</title>
          <meta name="description" content="Недвижимость Площадь Цена Удалить" />
          <meta name="keywords" content="Удалить Цена Площадь Недвижимость Избранное" />
        </Helmet>
        <div className="empty">
          <h3>{t('cart-page-text')}</h3>
          <Link to="/products" className="btn">
            {t('cart-page-btn-text')}
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="корзина" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    padding-top: 50px;
   
    h3 {
      margin-bottom: 4rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
