import styled from 'styled-components';

export const Wrapper = styled.canvas`
  width: 440px;
  margin: 0 25px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;