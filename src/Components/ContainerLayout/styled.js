import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding: 100px 50px 25px;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  align-items: ${({ centered }) => (centered ? "center" : "flex-start")};
  ${({ centered, horizontal }) =>
    centered && horizontal && `justify-content: center;`};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
