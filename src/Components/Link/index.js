import React from "react";
import { StyledAnchor } from "./styled";

const Link = (props) => {
  const { href, target = "_self", children } = props;

  return (
    <StyledAnchor href={href} target={target}>
      {children}
    </StyledAnchor>
  );
};

export default Link;
