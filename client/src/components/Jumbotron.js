import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';
import siti from '../assets/Images/real-estate-gb254ea9ca_1921.jpg';
import { useTranslation } from 'react-i18next';

const Styles = styled.div`
  .jumbo {
    background: url(${siti})no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #eeeeee;
    opacity: 0.1;
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
    padding-right: 10%;
  }
  p {
    color: white;
    width: 90%;
    font-size: 18px;
  }
  h2 {
    color: white;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 16px;
    }
    .container-fluid {
      padding-top: 20px;
      //padding-left: 10%;
    }
  }

`;

const Jumbotron = () => {

  const { t } = useTranslation()

  return (
    <Styles>
      <Jumbo fluid className='jumbo'>
        <div className='overlay'> </div>
        <Container fluid className='container-fluid'>
          <h2>{t('jumbotron-title-1')}</h2>
          <br />
          <p>{t('jumbotron-text-1')}<br />
            {t('jumbotron-text-2')}<br />
            {t('jumbotron-text-3')}
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
}

export default Jumbotron;
