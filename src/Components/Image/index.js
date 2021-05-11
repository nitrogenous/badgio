import { Img } from './styled'; 

const Image = ({ src, alt, width = '440px' }) => {

  return(
    <Img src={src} alt={alt} width={width} />
  );
};

export default Image;
