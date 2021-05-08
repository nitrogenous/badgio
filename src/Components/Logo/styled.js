import styled from 'styled-components';
import { Colors } from '../../Constants';

export const Wrapper = styled.div`
  font-size: 24px;
  user-select: none;
  font-weight: bold;
  letter-spacing: 4px;
  color: ${Colors.logo.font};

  &:hover {
    cursor: pointer;
  }
`;