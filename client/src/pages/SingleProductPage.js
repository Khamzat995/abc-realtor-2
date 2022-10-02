import React, { useEffect } from "react";
/*import { useParams, useHistory, Link } from "react-router-dom";*/
import { useParams, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import ScrollAnimation from "react-animate-on-scroll";
/* import { formatPrice } from "../utils/helpers"; */
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
import { Helmet } from "react-helmet";
import WhatsApp from '../assets/Icons/WhatsApp.jpg';
import Insta from '../assets/Icons/insta.jpg';
import telegram from '../assets/Icons/telegram.jpg'
import Gmail from '../assets/Icons/Gmail.jpg'
import Youtube from "../assets/Icons/Youtube_mini.webp"


const SingleProductPage = () => {
  const { id } = useParams();
  /* const history = useHistory();*/
  const { t } = useTranslation();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    products: newProducts,
    fetchSingleProduct,
  } = useProductsContext();

  const relatedProducts = newProducts.filter((prod) => prod.company === product.company);


  /*useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error]);*/

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
      <Helmet>
        <title>product name</title>
        <meta name="description" content="Квартира Дом Земля" />
        <meta name="keywords" content="доступно район комнаты площадь этаж" />
      </Helmet>
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
            </h2>
            <Stars stars={stars} reviews={reviews} />
            {/* <h5 className="price">{formatPrice(price)}</h5> */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", width: "100%" }}><h5 className="price">{price}$</h5>
              <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
                <p className="citizen-price">
                  {price >= 400000 && <>{t('citizen-price')}</>
                  }
                </p>
              </ScrollAnimation>
            </div>

            <p className="desc">
              {/*{description}*/}
              {
                description === "description_benesta" &&
                <>{t('product-description-1')}</>
              }

              {
                description === "description_odul" &&
                <>{t('product-description-2')}</>
              }
              {
                description === "description_acarblu" &&
                <>{t('product-description-3')}</>
              }
              {
                description === "description_alya" &&
                <>{t('product-description-4')}</>
              }
              {
                description === "description_gumus" &&
                <>{t('product-description-5')}</>
              }
              {
                description === "description_kandilli_reserve" &&
                <>{t('product-description-6')}</>
              }
              {
                description === "description_kandilli_yucelpark" &&
                <>{t('product-description-7')}</>
              }
              {
                description === "description_kandilli_nakkastepe" &&
                <>{t('product-description-8')}</>
              }
              {
                description === "description_kandilli_skyland" &&
                <>{t('product-description-9')}</>
              }
              {
                description === "description_nisantası_koru" &&
                <>{t('product-description-10')}</>
              }
              {
                description === "description_teras_kule" &&
                <>{t('product-description-11')}</>
              }
              {
                description === "description_yamanevler" &&
                <>{t('product-description-12')}</>
              }
              {
                description === "description_matar_residence" &&
                <>{t('product-description-13')}</>
              }
              {
                description === "description_matar_istanbul" &&
                <>{t('product-description-14')}</>
              }
              {
                description === "description_matar_deluxia" &&
                <>{t('product-description-15')}</>
              }
              {
                description === "description_matar_marti" &&
                <>{t('product-description-16')}</>
              }
              {
                description === "description_matar_uplife" &&
                <>{t('product-description-17')}</>
              }
              {
                description === "description_matar_yucelpark" &&
                <>{t('product-description-18')}</>
              }
              {
                description === "description_matar_evinpark" &&
                <>{t('product-description-19')}</>
              }
              {
                description === "description_nefes_cengelkoy" &&
                <>{t('product-description-20')}</>
              }
              {
                description === "description_bluesea" &&
                <>{t('product-description-21')}</>
              }
              {
                description === "description_four_winds" &&
                <>{t('product-description-22')}</>
              }
              {
                description === "description_matar_akros" &&
                <>{t('product-description-23')}</>
              }
              {
                description === "description_beytturk_summer" &&
                <>{t('product-description-25')}</>
              }
              {
                description === "description_beytturk_beytepe" &&
                <>{t('product-description-26')}</>
              }
              {
                description === "description_beytturk_beytepe_plus" &&
                <>{t('product-description-27')}</>
              }
              {
                description === "description_lake_city" &&
                <>{t('product-description-28')}</>
              }
              {
                description === "description_beytturk_mia_thermal" &&
                <>{t('product-description-29')}</>
              }
              {
                description === "description_beytturk_orman" &&
                <>{t('product-description-30')}</>
              }
              {
                description === "description_ritz_carlton" &&
                <>{t('product-description-31')}</>
              }

            </p>
            <p className="info">
              <span>{t('product-span-text1')}</span>
              {stock > 0 ? t('product-span-text2') : <span className="saled"> {t('product-span-text3')} </span>}
            </p>
            <p className="info">
              <span>{t('product-span-text4')}</span>
              {district}
            </p>
            {category === "квартиры" &&
              <p className="info">
                <span>{t('product-span-text5')}</span>
                {company}
              </p>
            }
            {category === "дуплексы" &&
              <p className="info">
                <span>{t('product-span-text5')}</span>
                {company}
              </p>
            }
            {category === "виллы" &&
              <p className="info">
                <span>{t('product-span-text5')}</span>
                {company}
              </p>
            }
            <p className="info">
              <span>{t('product-span-text6')}</span>
              {footage}{" "} м²
            </p>
            {category === "дуплексы" &&
              <p className="info">
                <span className="floor">{t('product-span-text7')}</span>
                <p className="floor-two">{floor}</p>
              </p>
            }
            {category === "квартиры" &&
              <p className="info">
                <span className="floor">{t('product-span-text7')}</span>
                <p className="floor-two">{floor}</p>
              </p>
            }
            {category === "виллы" &&
              <p className="info">
                <span className="floor">{t('product-span-text7')}</span>
                <p className="floor-two">{floor}</p>
              </p>
            }
            <p className="info-1">
              <span className="floor-1">{t('product-span-text8')}{" "}</span>
              {/* <p className="fa fa-phone"> {t('product-span-text9')}</p> */}
              <div class="wrap-coll">
                <a href="tel:+905522868989">
                  <button class="button-coll">{t('product-span-text9')}</button>
                </a>
              </div>
            </p>
            <p className="info-1">
              <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
                <a href="https://wa.me/905522868989" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt='icons' />
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 2000}>
                <a href="https://t.me/istanbul_exp" target="_blank" rel="noopener noreferrer">
                  <img src={telegram} alt='icons' />
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 3000}>
                <a href="https://instagram.com/istanbul_expert/" target="_blank" rel="noopener noreferrer">
                  <img src={Insta} alt='icons' />
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 4000}>
                <a href="https://www.youtube.com/channel/UCR58sPLCgfgkZ0BDs9TKeCQ" target="_blank" rel="noopener noreferrer">
                  <img src={Youtube} alt='icons' />
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 5000}>
                <a href="mailto:exp.istanbul@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={Gmail} alt='icons' />
                </a>
              </ScrollAnimation>
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
            {stock === 0 &&
              <Link to="/products" className="btn" style={{ marginLeft: "30%", marginTop: "20px" }}>
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
            relatedProducts.slice(0, 6).map(product => {
              return <div className="products" >
                <Product key={product.id} {...product} />  </div>
            })
          }
        </div>
      </div >
    </Wrapper >
  );
};

const Wrapper = styled.main`
  .btn:hover {
    transform: scale(1.1);
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    padding: 5px;
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

  .floor-two {
    padding-left: 20px;
  }

  .info-1 a img {
    margin-right: 15px;
    height: 40px;
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

  .saled {
    color: red;
    text-transform: capitalize;
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
    .info-1 a img {
      margin-right: 10px;
    }
    
  
  }
  
`;

export default SingleProductPage;
