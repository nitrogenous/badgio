import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  ${"" /* height: 65vh; */}
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
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    color: #f7f8f3;
    font-size: 86px;

    b {
      color: #f15f79;
    }

    a {
      background: #f15f79;
      padding: 2.5px 5px;

      &:after {
        left: 7.5px;
        width: 90%;
        opacity: 1;
        background: #f7f8f3;
      }
    }
  }

  button {
    font-size: 18px;
    margin-top: 25px;
    margin-left: 1em;
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
      margin-left: 1em;
    }
  }
`;
