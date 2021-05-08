import styled from 'styled-components';
import { Colors } from '../../Constants/';

export const Wrapper = styled.div`
  display: flex;
  padding: 15px 25px;
  align-items: center;
  color: ${Colors.header.font};
  justify-content: space-between;
  background: ${Colors.header.background};
`;