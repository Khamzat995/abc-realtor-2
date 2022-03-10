import React from "react";
import styled from "styled-components";
import Logo_expertRed from "../assets/logo/Logo_expertRed.jpg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import flagOne from '../assets/Icons/flagOne.jpg';
import { useTranslation } from 'react-i18next';
import LangTransOne from "./LangTransOne";


const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const { t } = useTranslation();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo_expertRed} alt="logo" />
          </Link>
          <LangTransOne />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <div className="nav-phone" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <img className="icon-item" src={flagOne} alt='icons' style={{ width: '40px' }} />
            <h5 className="fas fa-phone" style={{ paddingLeft: '5px', color: 'var(--clr-grey-3)' }}> {" "}+90 552 286 8989</h5>
          </div>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  {t(text)}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">проверить</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    padding-left: 10px;
    padding-right: 10px;
    //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      margin-left: -10px;
    }
    .icon-item {
     width: 40px;
    }
    h5 {
      padding-top: 10px;
      padding-left: 5px;
      color: var(--clr-grey-3);
    }
  }
  
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
    align-items: center;
    .nav-phone {
      width: 230px;
      display: flex;
      align-items: flex-end;
      h5 {
        color: var(--clr-grey-3);
      }
    }
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
     
    }
    .nav-links {
      display: flex;
      justify-content: center;
      transition: all 0.5s ease;

      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-1);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
