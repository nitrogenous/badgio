import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  padding: 100px 50px 25px;
  flex-direction: ${({horizontal}) => horizontal ? 'row' : 'column'};
  align-items: ${({ centered }) => centered ? 'center' : 'flex-start'};
  ${({centered, horizontal}) => centered && horizontal && `justify-content: center;`};
`;

export const BackgroundWaves = styled.img`
  bottom: 0;
  width: 100%;
  z-index: -1;
  position: fixed;
`;