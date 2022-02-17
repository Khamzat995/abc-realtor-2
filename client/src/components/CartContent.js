import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { useTranslation } from 'react-i18next';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const { t } = useTranslation();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          {t('cart-content-btn1')}
        </Link>
        <button className="btn" onClick={clearCart}>
          {t('cart-content-btn2')}
        </button>
      </div>
    </Wrapper>

  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .link-btn:hover {
    transform: scale(1.1);
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
