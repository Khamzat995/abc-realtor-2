import React from "react";
import styled from "styled-components";
import WhatsApp from '../assets/Icons/WhatsApp.png';
import Insta from '../assets/Icons/insta.png';
import Gmail from '../assets/Icons/Gmail.png';
import telegram from '../assets/Icons/telegram.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="section-center">
        <ScrollAnimation animateIn='bounce'
          initiallyVisible={true}
          animateOnce={true}>
          <h4>{t('contact-title')}</h4>
        </ScrollAnimation>
        <div className="content">
          <div>
            <p> {t('contact-text-1')}
              <ScrollAnimation delay={1000} animateIn='tada' initiallyVisible={true}> <i className="fas fa-phone">{" "}+90 552 286 8989, +90 552 592 9191 </i> .
              </ScrollAnimation>{t('contact-text-2')}
            </p>
            <span className='contacts_item'>
              <ScrollAnimation animateIn='bounce' delay={1000}
                initiallyVisible={true}
                animateOnce={true}>
                <a href="https://wa.me/905522868989" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt='icons' />
                </a>
              </ScrollAnimation>

              <ScrollAnimation animateIn='bounce' delay={1300}
                initiallyVisible={true}
                animateOnce={true}>
                <a href="https://t.me/istanbul_exp" target="_blank" rel="noopener noreferrer">
                  <img src={telegram} alt='icons' />
                </a>
              </ScrollAnimation>

              <ScrollAnimation animateIn='bounce' delay={1100}
                initiallyVisible={true}
                animateOnce={true}>
                <a href="https://instagram.com/istanbul_expert/" target="_blank" rel="noopener noreferrer">
                  <img src={Insta} alt='icons' />
                </a>
              </ScrollAnimation>

              <ScrollAnimation animateIn='bounce' delay={1200}
                initiallyVisible={true}
                animateOnce={true}>
                <a href="mailto:exp.istanbul@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={Gmail} alt='icons' />
                </a>
              </ScrollAnimation>
            </span>
          </div>
          <form className="contact-form">
            <input
              action="https://formsubmit.co/russia.07@mail.ru" method="POST"
              type="email"
              className="form-input"
              placeholder={t('contact-placeholder')}
            />
            <button type="submit" className="submit-btn">
              {t('contact-text-3')}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 2rem 0;
  h4 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-3);
  }
  .content .contacts_item {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .content .contacts_item img {
    margin-right: 15px;
    height: 40px;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: none;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`;

export default Contact;
