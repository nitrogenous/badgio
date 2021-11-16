import { Img } from "./styled";

const Image = ({ src, alt, width = "440px", height = "auto" }) => {
  return <Img src={src} alt={alt} width={width} height={height} />;
};

export default Image;
