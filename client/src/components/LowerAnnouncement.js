import React from "react";
import styled, { keyframes } from "styled-components";
import { small } from '../reducers/responsive';
import { useTranslation } from 'react-i18next'

const runningText = keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`;

const Container = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(225, 232, 228, 0.56);
  overflow: hidden;
  text-align: justify;
  ${small({ height: "4rem" })}
  margin-top: 6rem;

  & p {
    width: 100%;
    position: relative;
    font-size: 18px;
    top: 10px;
    animation: ${runningText} 15s infinite linear;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 14px;

    }
  }
`;

const LowerAnnouncement = () => {

  const { t } = useTranslation()

  return (
    <Container>
      <p className="fa fa-phone"> {t('lower-announcement')}</p>
    </Container>
  );
};

export default LowerAnnouncement;
