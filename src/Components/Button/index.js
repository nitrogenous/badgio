import { Wrapper } from './styled';

const Button = ({ primary, children }) => {
  return (
    <Wrapper primary={primary}>
      {children}
    </Wrapper>
  );
};

export default Button;
