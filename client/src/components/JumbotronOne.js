import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';
import Antalya from '../assets/Images/Antalya.jpeg';
import { useTranslation } from 'react-i18next';

const Styles = styled.div`
  .jumbo {
    background: url(${Antalya})no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 510px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .container-fluid {
    padding-top: 80px;
    padding-left: 10%;
    padding-right: 5%;
    }
  .container-fluid p {
    color: white;
    font-size: 18px;
  }
@media screen and (max-width: 600px) {
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  
  .container-fluid {
    padding: 20px;
    p {
      font-size: 16px;
    }
  }
}

`;

const JumbotronOne = () => {

  const { t } = useTranslation()
  return (
    <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay'> </div>
      <Container fluid className='container-fluid'>
        <h2>{t('jumbotron-one-title1')}</h2>
        <h3>{t('jumbotron-one-title2')}</h3>
        <p>
          {t('jumbotron-one-text1')}<br/>
          {t('jumbotron-one-text2')}<br/>
          {t('jumbotron-one-text3')}<br/>
          {t('jumbotron-one-text4')}<br/>
        </p>
      </Container>
    </Jumbo>
    </Styles>
  );
}

export default JumbotronOne;
