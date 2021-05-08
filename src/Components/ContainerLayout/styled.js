import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  padding: 25px 50px;
  flex-direction: ${({horizontal}) => horizontal ? 'row' : 'column'};
  align-items: ${({ centered }) => centered ? 'center' : 'flex-start'};
  ${({centered, horizontal}) => centered && horizontal && `justify-content: center;`};
`;