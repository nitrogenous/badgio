import styled from 'styled-components';
import { Colors } from '../../Constants';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  
  &:after {
    content: attr(data-text);
    top: 0;
    left: 0;
    z-index: 20;
    height: 15px;
    display: block;
    font-size: 18px;
    font-weight: 300;
    line-height: 15px;
    padding: 10px 15px;
    position: absolute;
    pointer-events: none;
    border-radius: 2.5px;
    width: calc(100% - 40px);
    color: ${Colors.fileUploader.font};
    background: ${Colors.fileUploader.background};
  }
  
  &:before {
    content: 'Select';
    top: 0;
    right: 0;
    z-index: 25;
    height: 35px;
    font-size: 16px;
    padding: 0 15px;
    font-weight: 700;
    line-height: 35px;
    position: absolute;
    pointer-events: none;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 0 2.5px 2.5px 0;
    color: ${Colors.fileUploader.buttonFont};
    background: ${Colors.fileUploader.buttonBackground};
  }
  
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 99;
  width: 100%;
  height: 35px;
  display: block;
  cursor: pointer;
  position: absolute;
`;