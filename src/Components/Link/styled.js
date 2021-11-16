import styled from "styled-components";

export const StyledAnchor = styled.a`
  color: #f7f8f3;
  position: relative;
  text-decoration: none;
  transition: 0.2s ease;

  &:visited,
  &:active,
  &:focus {
    text-decoration: none;
    color: #f7f8f3;
  }

  &:after {
    content: "";
    left: 0;
    height: 5px;
    width: 100%;
    display: block;
    margin-top: -10px;
    position: absolute;
    background: transparent;
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover {
    color: #2c3d63;
    transition: 0.3s ease;

    &:after {
      opacity: 1;
      background: #2c3d63;
      transition: all 0.2s ease;
    }
  }
`;
