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

  button {
    margin: 7.5px;
  }
`;