import styled from 'styled-components';

export const Img = styled.img`
  width: ${({width}) => width};
  margin: 0px 25px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;