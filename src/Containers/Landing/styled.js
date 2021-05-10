import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  height: 65vh;
  justify-content: center;
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
`;