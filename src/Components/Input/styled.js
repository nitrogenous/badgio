import styled from 'styled-components';
import { Colors } from '../../Constants';

export const StyledInput = styled.input`
  color: red;
  border: none;
  height: 15px;
  outline: none;
  margin: 5px 0px;
  font-size: 18px;
  font-weight: 300;
  line-height: 15px;
  padding: 10px 15px;
  border-radius: 2.5px;
  color: ${Colors.fileUploader.font};
  background: ${Colors.fileUploader.background};
`;