import { Wrapper } from './styled';

const Block = ({ children, vertical }) => {
  return (
    <Wrapper vertical={vertical}>
      {children}
    </Wrapper>
  );
};

export default Block;
