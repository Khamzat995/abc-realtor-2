import React from "react";
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
import { PageHero } from "../components";
import turkey from '../assets/Images/medicine/turkey.jpg';
import beach1 from '../assets/Images/medicine/beach1.jpg';
import children from '../assets/Images/medicine/children.jpg';
import medicine1 from '../assets/Images/medicine/medicine1.jpg';
import shutters from '../assets/Images/medicine/shutters.jpg';
import JumbotronOne from '../components/JumbotronOne';
import ContactAbout from '../components/ContactAbout';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <PageHero title="туризм" />

      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>{t('about-title-1')}</h2>
            <div className="underline"/>
          </div>
          <p>{t('about-text-1')}</p>
          <p><span style={{fontWeight:'bold', fontSize: '18px'}}>{t('about-title-2')}</span><br/>
            {t('about-text-2')}</p>
          <p> <span style={{fontWeight:'bold', fontSize: '18px'}}>{t('about-title-3')}</span><br/>
            {t('about-text-3')}</p>
          <p> <span style={{fontWeight:'bold', fontSize: '18px'}}>{t('about-title-4')} </span><br/>
            {t('about-text-4')}</p>
        </article>
        <div className='picture-slider'>
          <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
              <img src={children} alt="Node" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
              <img src={beach1} alt="Node" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
              <img src={shutters} alt="Node" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
              <img src={turkey} alt="Node" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 0.5}>
              <img src={medicine1} alt="Node" />
            </ScrollAnimation>
          </div>
        </div>
      </Wrapper>
      <JumbotronOne />
      <ContactAbout />
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  padding-bottom: 20px;
  padding-top: 40px;
  
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  h2 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    color: var(--clr-grey-3);
  }
  p {
    margin-top: 2rem;
    text-indent: 2em; /* Отступ первой строки */
    text-align: justify; /* Выравнивание по ширине */
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .picture-slider {
    padding-top: 20px;
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
`;
export default AboutPage;
