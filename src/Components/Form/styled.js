import styled from 'styled-components';
import { Colors } from '../../Constants';

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  color: ${Colors.form.font};
  padding: 15px 20px 10px 20px;
  justify-content: space-around;
  background: ${Colors.form.background};

  @media (max-width: 768px) {
    width: auto !important;
  }
`;


export const Content = styled.form`
  display: flex;
  min-height: 100px;
  flex-direction: column;
  padding: 10px 0 0 17.5px;
  justify-content: space-around;
`;

export const Title = styled.h2`
  margin: 0;
`;