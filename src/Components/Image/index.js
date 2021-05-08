import { Img } from './styled'; 

const Image = ({ src, alt }) => {

  return(
    <Img src={src} alt={alt} />
  );
};

export default Image;
