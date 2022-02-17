import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const PageHero = ({ title, product }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link to="/">{t('page-hero-title')}</Link>
          {product && <Link to="/products">{t('page-hero-text')}</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgba(225, 232, 228, 0.56);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
