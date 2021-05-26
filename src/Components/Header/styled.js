import styled from 'styled-components';
import { Colors } from '../../Constants/';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  padding: 15px 50px;
  align-items: center;
  color: ${Colors.header.font};
  justify-content: space-around;
  background: ${Colors.header.background};
  z-index: 99;

  button {
    margin: 7.5px;
  }

  @media (max-width: 768px) {
    padding: 15px 5px !important;
    
    div {
      margin: 0 !important;
    }
  }
`;