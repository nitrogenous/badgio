import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding-bottom: 25%;

  div {
    max-width: 75vw;
    align-items: center;
  }
`;

export const Title = styled.span`
  color: #043353;
  font-size: 46px;
  margin: 25px 0;
  ${({right}) => right && 'text-align: right;'};
`;