import { Wrapper } from './styled';

const Button = ({ primary, onClick, children }) => {
  return (
    <Wrapper primary={primary} onClick={onClick} >
      {children}
    </Wrapper>
  );
};

export default Button;
