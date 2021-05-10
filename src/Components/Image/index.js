import { Img } from './styled'; 

const Image = ({ src, alt, width = '440pxx' }) => {

  return(
    <Img src={src} alt={alt} width={width} />
  );
};

export default Image;
