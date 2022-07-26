import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { Stars } from './index';
import { useTranslation } from 'react-i18next';

const ListView = ({ products }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {products.map((product) => {
        const { _id, images, name, price, description, stars, reviews } = product;
        return (
          <article key={_id}>
            <Link to={`/products/${_id}`} >
              <img src={images[0].url} alt={name} />
            </Link>
            <div>
              <h4>
                {/*{name}*/}
                {
                  name === "квартира" &&
                  <>{t('product-name-1')}</>
                }
                {
                  name === "дуплекс" &&
                  <>{t('product-name-2')}</>
                }
                {
                  name === "земля" &&
                  <>{t('product-name-3')}</>
                }
                {
                  name === "вилла" &&
                  <>{t('product-name-4')}</>
                }
              </h4>
              <div className="stars-price" >
                {/*  <h5 className="price">{formatPrice(price)}</h5>
 */}
                <h5 className="price">{price}$</h5>
                <Stars stars={stars} reviews={reviews} />
              </div>
              <p>
                {/*{description.substring(0, 150)}*/}

                {
                  description === "description_benesta" &&
                  <>{t('product-description-1').substring(0, 150)}</>
                }

                {
                  description === "description_odul" &&
                  <>{t('product-description-2').substring(0, 150)}</>
                }
                {
                  description === "description_acarblu" &&
                  <>{t('product-description-3').substring(0, 150)}</>
                }
                {
                  description === "description_alya" &&
                  <>{t('product-description-4').substring(0, 150)}</>
                }
                {
                  description === "description_gumus" &&
                  <>{t('product-description-5').substring(0, 150)}</>
                }
                {
                  description === "description_kandilli_reserve" &&
                  <>{t('product-description-6').substring(0, 150)}</>
                }
                {
                  description === "description_kandilli_yucelpark" &&
                  <>{t('product-description-7').substring(0, 150)}</>
                }
                {
                  description === "description_kandilli_nakkastepe" &&
                  <>{t('product-description-8').substring(0, 150)}</>
                }
                {
                  description === "description_kandilli_skyland" &&
                  <>{t('product-description-9').substring(0, 150)}</>
                }
                {
                  description === "description_nisantası_koru" &&
                  <>{t('product-description-10').substring(0, 150)}</>
                }
                {
                  description === "description_teras_kule" &&
                  <>{t('product-description-11').substring(0, 150)}</>
                }
                {
                  description === "description_yamanevler" &&
                  <>{t('product-description-12').substring(0, 150)}</>
                }
                {
                  description === "description_matar_residence" &&
                  <>{t('product-description-13').substring(0, 150)}</>
                }
                {
                  description === "description_matar_istanbul" &&
                  <>{t('product-description-14').substring(0, 150)}</>
                }
                {
                  description === "description_matar_deluxia" &&
                  <>{t('product-description-15').substring(0, 150)}</>
                }
                {
                  description === "description_matar_marti" &&
                  <>{t('product-description-16').substring(0, 150)}</>
                }
                {
                  description === "description_matar_uplife" &&
                  <>{t('product-description-17').substring(0, 150)}</>
                }
                {
                  description === "description_matar_yucelpark" &&
                  <>{t('product-description-18').substring(0, 150)}</>
                }
                {
                  description === "description_matar_evinpark" &&
                  <>{t('product-description-19').substring(0, 150)}</>
                }
                {
                  description === "description_nefes_cengelkoy" &&
                  <>{t('product-description-20').substring(0, 150)}</>
                }
                {
                  description === "description_bluesea" &&
                  <>{t('product-description-21').substring(0, 150)}</>
                }
                {
                  description === "description_four_winds" &&
                  <>{t('product-description-22').substring(0, 150)}</>
                }
                ...</p>
              <Link to={`/products/${_id}`} className="btn">
                {t('list-view-1')}
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 450px;
    display: block;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  article {
   padding: 10px;
   border-radius: 5px;
  }
  article:hover{
    transition: all 0.2s linear;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .Stars {
    align-items: center;
  }
  .stars-price {
    display: flex;
    width: 450px;
    justify-content: flex-start;
    align-items: baseline;
    height: 30px;
  }
  .price {
    color: var(--clr-primary-4);
    margin-right: 10px;
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
  .btn:hover{
    transform: scale(1.1);
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
