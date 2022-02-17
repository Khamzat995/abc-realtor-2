import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';
import panoramaJumbo from '../assets/Images/panoramaJombo.jpg';
import { useTranslation } from 'react-i18next';

const Styles = styled.div`
  .jumbo {
    background: url(${panoramaJumbo})no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
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
  p {
    color: white;
    width: 90%;
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 12px;
    }
    .container-fluid {
      padding-top: 20px;
      //padding-left: 10%;
    }
  }
`;

const JumbotronTwo = () => {
  const { t } = useTranslation();

  return (
    <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay'> </div>
      <Container fluid className='container-fluid'>
        <h2>{t('jumbotron-two-1')}</h2>
        <h3>{t('jumbotron-two-2')}</h3>
        <p>
          {t('jumbotron-two-text1')}<br/>
          {t('jumbotron-two-text2')}<br/>
          {t('jumbotron-two-text3')}<br/>
          {t('jumbotron-two-text4')}<br/>
          {t('jumbotron-two-text5')}<br/>
          {t('jumbotron-two-text6')}<br/>
          {t('jumbotron-two-text7')}<br/>
          {t('jumbotron-two-text8')}<br/>
          {t('jumbotron-two-text9')}<br/>
          {t('jumbotron-two-text10')}<br/>
          {t('jumbotron-two-text11')}<br/>
          {t('jumbotron-two-text12')}<br/>
        </p>
      </Container>
    </Jumbo>
    </Styles>
  );
}

export default JumbotronTwo;
