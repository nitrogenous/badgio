import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  padding: 25px 50px;
  flex-direction: column;
  ${({ centered }) => centered && 'align-items: center'};
`;