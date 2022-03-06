import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Product = ({ images, name, category, company, footage, price, _id }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link to={`/products/${_id}`}>
        <div className="container">
          <img src={images[0].url} alt={name} />
        </div>
        <footer>
          <h5>
            {
              name === "квартира" &&
              <>{t('product-name-1')}</>
            }
            {
              name === "дом" &&
              <>{t('product-name-2')}</>
            }
            {
              name === "земля" &&
              <>{t('product-name-3')}</>
            }

          </h5>
          <div>
            {category === "дома" &&
              <i className="fa fa-bed" aria-hidden="true">{" "}{company}</i>
            }
            {category === "квартиры" &&
              <i className="fa fa-bed" aria-hidden="true">{" "}{company}</i>
            }

          </div>
          <div>
            {category === "дома" &&
              <i className="fa fa-cube" aria-hidden="true"> {footage}{" "}м² </i>
            }
            {category === "квартиры" &&
              <i className="fa fa-cube" aria-hidden="true"> {footage}{" "}м² </i>
            }
            {category === "земля" &&
              <i className="fa fa-cube" aria-hidden="true"> {footage}{" "}м² </i>
            }
          </div>

          <p>{formatPrice(price)}</p>
        </footer>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: 5px;
    overflow:hidden;
    transition: all 0.5s;
    height:auto;
  }
  .container:hover{
    transform: scale(1.1);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 500;
  }
  footer p,
  footer i {
    color: #3F6B68FF;
    letter-spacing: normal;
  }
  footer h5 {
    color: #3F6B68FF;
    letter-spacing: var(--spacing);
  }
`;
export default Product;
