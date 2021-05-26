import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  height: 65vh;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex !important;
    height: auto !important;
    flex-direction: column !important;

    img {
      margin: 0 !important;
      width: 100% !important;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  margin-left: 75px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    color: #043353;
    font-size: 64px;
  }

  button {
    font-size: 18px;
    margin-top: 25px;
    margin-left: 10em;
    padding: 15px 25px;
  }

  @media (max-width: 768px) {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    align-items: center !important;
    margin-top: 35px !important;
    margin-left: 0 !important;

    span {
      font-size: 7.5vw !important;
    }

    button {
      margin-left: 0;
    }
  }
`;