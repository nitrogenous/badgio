import styled from 'styled-components';
import { Colors } from '../../Constants';

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  padding: 15px 20px 10px 20px;
  border-radius: 5px;
  flex-direction: column;
  color: ${Colors.form.font};
  justify-content: space-around;
  background: ${Colors.form.background}
`;


export const Content = styled.form`
  display: flex;
  min-height: 100px;
  flex-direction: column;
  padding: 5px 0 0 17.5px;
  justify-content: space-around;
`;

export const Title = styled.h2`
  margin: 0;
`;