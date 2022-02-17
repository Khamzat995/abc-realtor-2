import React from 'react';
import citizen from '../assets/Images/citizen.jpg';
import unnamedOne from '../assets/Images/unnamedOne.jpg';
import buying from '../assets/Images/buying.jpg';
import workOne from '../assets/Images/workOne.jpg';
import JumbotronTwo from '../components/JumbotronTwo';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import BannerOne from '../components/bannerOne/BannerOne';
import { useTranslation } from 'react-i18next';

const CitizenshipPage = () => {
  const { t } = useTranslation();

  return (
    <main style={{marginTop: "6rem"}}>
      <div className="citizen-card">
        <BannerOne />
          <div className="title">
            <h4 className="title_citi">{t('citizen-title-1')}</h4>
          </div>
        <div className='citizen_div' style={{padding: "10px 10px"}}>
          <p>{t('citizen-text-1')}
             <a href="https://e-ikamet.goc.gov.tr/"> Goç İdaresi Genel Müdürlüğü</a>.
          </p>
        </div>
      </div>
      <Wrapper className="page section section-center">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 0.5}>
          <img src={citizen} alt='картинка'/>
        </ScrollAnimation>
        <article>
          <div className="title">
            <h4>{t('citizen-title-2')}</h4>
            <div className="underline"/>
          </div>
            <p>{t('citizen-text-2')} </p>
        </article>
      </Wrapper>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h4>{t('citizen-title-3')}</h4>
            <div className="underline"/>
          </div>
          <p>{t('citizen-text-3')}</p>
        </article>
          <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
          <img src={unnamedOne} alt='картинка'/>
        </ScrollAnimation>
      </Wrapper>
      <Wrapper className="page section section-center">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 0.5}>
          <img src={buying} alt='картинка'/>
        </ScrollAnimation>
        <article>
          <div className="title">
            <h4>{t('citizen-title-4')}</h4>
            <div className="underline"/>
          </div>
          <p>{t('citizen-text-4')}</p>
        </article>
      </Wrapper>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h4>{t('citizen-title-5')}</h4>
            <div className="underline"/>
          </div>
          <p>{t('citizen-text-5')}</p>
        </article>
          <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
          <img src={workOne} alt='картинка'/>
        </ScrollAnimation>
      </Wrapper>
      <div className="citizen-card-two" style={{padding: "10px 10px"}}>
          <h4>{t('citizen-title-6')}</h4>
        <p>{t('citizen-text-6')}</p>
      </div>
      <JumbotronTwo />
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  padding-bottom: 10px;
  padding-top: 20px;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    text-indent: 2em; /* Отступ первой строки */
    text-align: justify; /* Выравнивание по ширине */
    font-size: 18px;
    max-width: 45em;
    margin: 0 auto;
    color: var(--clr-grey-3);
  }
  p {
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .title h4 {
    text-transform: none;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .icon-item {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
  .icon-item-one {
    height: 30px;
    margin-top: 30px;
    margin-left: 5px;
  }
  li {
    width: 300px;
    display: flex;
    align-items: flex-end;
  }
  .number-item {
    width: 100%;
    padding-left: 10px;
  }
  
  @media screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
    .title {
      margin-top: 20px;
    }
  }
`;

export default CitizenshipPage;