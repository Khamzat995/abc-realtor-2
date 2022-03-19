import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContactAbout() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-right">
            <ScrollAnimation animateIn='bounce'
              initiallyVisible={true}
              animateOnce={true}>
              <h4>{t('contact-about-1')}</h4>
            </ScrollAnimation>
            <Link to="#"> <i className="fas fa-map-marker-alt" />{t('contact-about-text-1')} </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt" />{t('contact-about-text-2')} </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt" />{t('contact-about-text-3')} </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt" />{t('contact-about-text-4')} </Link>
          </div>
          <div className="box" data-aos="fade-down">
            <ScrollAnimation animateIn='bounce'
              initiallyVisible={true}
              animateOnce={true}>
              <h4>{t('contact-about-2')}</h4>
            </ScrollAnimation>
            <Link to="/">{t('contact-about-text-5')}</Link>
            <Link to="/products">{t('contact-about-text-6')}</Link>
            <Link to="/citizen">{t('contact-about-text-7')}</Link>
            <Link to="/about">{t('contact-about-text-8')}</Link>
          </div>
          <div className="box" data-aos="fade-up">
            <ScrollAnimation animateIn='bounce'
              initiallyVisible={true}
              animateOnce={true}>
              <h4>{t('contact-about-3')}</h4>
            </ScrollAnimation>
            <Link to="#"> <i className="fas fa-phone" /> +90 552 286 8989 </Link>
            <Link to="#"> <i className="fas fa-phone" /> +90 552 592 9191 </Link>
            <a href="mailto:exp.istanbul@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope" />  exp.istambul@gmail.com </a>
            <Link to="#"> <i className="fas fa-map-marker-alt" /> {t('contact-about-text-9')} - 34520  </Link>
          </div>
          <div className="box" data-aos="fade-left">
            <ScrollAnimation animateIn='bounce'
              initiallyVisible={true}
              animateOnce={true}>
              <h4>{t('contact-about-4')}</h4>
            </ScrollAnimation>
            <a href="https://wa.me/905522868989" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /> whatsapp </a>
            <a href="https://instagram.com/istanbul_expert/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /> instagram </a>
            <a href="https://t.me/istanbul_exp" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram" /> telegram </a>
            <Link to="#"> <i className="fab fa-facebook-f" /> facebook </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  background: var(--clr-black);
  padding-left: 20px;
  padding-right: 10px;
  
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .box-container .box h4 {
    font-size: 1.2rem;
    color: var(--clr-primary-5);
    padding: 1rem 0;
  }
  .box-container .box a {
    font-size: 1rem;
    color: #aaa;
    //padding: 1rem 0;
    display: block;
  }
  .box-container .box a:hover {
    color: #fff;
  }
  .box-container .box a i {
    padding-right: .5rem;
    color: var(--main-color);
  }

  .box-container .box a:hover i {
    color: #fff;
  }
  @media (min-width: 992px) {
    .box-container {
      display: grid;
      justify-items: center;
      align-items: start;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  
  @media (min-width: 1280px) {
    padding: 2rem 0;
  }
`;

export default ContactAbout;