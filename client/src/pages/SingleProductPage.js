import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import ScrollToTop from 'react-scroll-to-top'
import Product from '../components/Product';
import { useTranslation } from 'react-i18next';


const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    products: newProducts,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error]);

  useEffect(() => {
  fetchSingleProduct(id);
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    company,
    category,
    images,
    footage,
    floor,
    district
  } = product;


  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>
              {/*{name}*/}
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
            </h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">
              {/*{description}*/}
              {
                description === "description-1" &&
                <>{t('product-description-1')}</>
              }

              {
                description === "description-2" &&
                <>{t('product-description-2')}</>
              }
              {
                description === "description-3" &&
                <>{t('product-description-3')}</>
              }
              {
                description === "description-4" &&
                <>{t('product-description-4')}</>
              }
            </p>
            <p className="info">
              <span>{t('product-span-text1')}</span>
              {stock > 0 ? t('product-span-text2') : <h5> {t('product-span-text3')} </h5>}
            </p>
            <p className="info">
              <span>{t('product-span-text4')}</span>
              {district}
            </p>
            { category === "квартиры" &&
            <p className="info">
              <span>{t('product-span-text5')}</span>
              {company}
            </p>
            }
            { category === "дома" &&
            <p className="info">
              <span>{t('product-span-text5')}</span>
              {company}
            </p>
            }
            <p className="info">
              <span>{t('product-span-text6')}</span>
              {footage}{" "} м²
            </p>
            {category === "дома" &&
            <p className="info">
              <span className="floor">{t('product-span-text7')}</span>
             <p className="floorTwo">{floor}</p>
            </p>
            }
            {category === "квартиры" &&
            <p className="info">
              <span className="floor">{t('product-span-text7')}</span>
              <p className="floorTwo">{floor}</p>
            </p>
            }
            <p className="info-1">
              <span className="floor-1">{t('product-span-text8')}{" "}</span>
              <p className="fa fa-phone"> {t('product-span-text9')}</p>
            </p>

            <hr />
            {stock > 0 && <AddToCart product={product} />}
            {stock === 0 &&
              <Link to="/products" className="btn" style={{marginLeft: "30%", marginTop: "20px"}}>
                {t('product-stock-btn')}
              </Link>
            }
          </section>
          <hr />
        </div>
        <h3>{t('product-stock-btn1')}</h3>
        <div className="prefix">
          <ScrollToTop />
            {
              newProducts.slice(0, 6).map((product) => {
                return product.company === product.company
                  ?
                  <div className="products" >
                  <Product key={product._id} {...product} />  </div>: null
              })
            }
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .btn:hover{
    transform: scale(1.1);
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  h3 {
    text-transform: none;
  }
  .prefix {
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .products {
    width: 350px;
    margin: 5px;
  }
  .products img {
    height: 250px;
  }
  .floor {
    width: 150px;
    height: 24px;
  }
  .floor-1 {
    width: auto;
  }
  .fa-phone {
    padding-right: 10px;
    padding-left: 10px;
  }
  .floorTwo {
    padding-left: 20px;
  }
  .price {
    color: var(--clr-primary-4);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: none;
    width: 400px;
    height: 24px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
    }
    
    h5 {
      color: red;
      text-transform: uppercase;
    }
  .info-1 {
    width: 100%;
    display: flex;
    grid-template-columns: 250px 1fr;
    align-items: baseline;
    //margin-top: 125px;
    span {
      font-weight: 700;
    }
  }

  .btn-products {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 200px;
    height: 54px;
  }
  

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  

`;

export default SingleProductPage;
