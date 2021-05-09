import { Wrapper } from './styled';

const Canvas = ({ canvasRef, width, height }) => {

  return (
    <Wrapper ref={canvasRef} width={width} height={height}></Wrapper>
  );
};

export default Canvas;
