import styled from 'styled-components';
import CardBackground from '../../Assets/Images/Cards/CardBackground.png';

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  color: #FAF8F0;
  height: 150px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  background: url(${CardBackground});;
  align-items: center;
  justify-content: center;
  background-size: cover;
  transition: 0.1s ease;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
  }
`;