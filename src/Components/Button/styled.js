import styled from 'styled-components';
import { Colors } from '../../Constants/';

export const Wrapper = styled.button` 
  border: 3px solid transparent;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 12.5px; 
  border-radius: 2.5px;
  transition: 0.2s ease;
  margin: 5px 0px;
  color: ${props => props.primary ? Colors.button.primary.font : Colors.button.secondary.font};
  background: ${props => props.primary ? Colors.button.primary.background : Colors.button.secondary.background};

  &:hover {
    cursor: pointer;
    border: 3px solid ${props => props.primary ? Colors.button.primary.background : Colors.button.secondary.background};
    background: ${props => props.primary ? Colors.button.secondary.background : Colors.button.primary.background};
  }
`;