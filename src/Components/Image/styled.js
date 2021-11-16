import styled from "styled-components";

export const Img = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0px 25px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;
