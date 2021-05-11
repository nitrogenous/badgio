import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 25px 10px;
  ${({vertical}) => vertical && 'flex-direction: column'}; 
`;
