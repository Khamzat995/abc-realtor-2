import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useTranslation } from 'react-i18next';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount] = useState(1);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="colors">
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(_id, mainColor, amount, product)}
        > {t('add-to-cart1')}
        </Link>
        <Link to="/products" className="btn">
          {t('add-to-cart2')}
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: none;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
  }
  .color-btn {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .btn {
    margin-top: 1rem;
    width: 200px;
    margin-left: 5%;
    //text-align: center;
    //vertical-align:middle;
  }
  a.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export default AddToCart;
