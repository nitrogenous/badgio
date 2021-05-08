import styled from 'styled-components';
import { Colors } from '../../Constants/';

export const Wrapper = styled.button` 
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  padding: 7.5px 10px; 
  border-radius: 2.5px;
  transition: 0.2s ease;
  color: ${props => props.primary ? Colors.button.primary.font : Colors.button.secondary.font};
  background: ${props => props.primary ? Colors.button.primary.background : Colors.button.secondary.background};

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px  ${props => props.primary ? Colors.button.primary.background : Colors.button.secondary.background};
  }
`;