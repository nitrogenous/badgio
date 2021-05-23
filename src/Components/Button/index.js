import { useHistory } from 'react-router-dom';
import { Wrapper } from './styled';

const Button = ({ primary, onClick, children, redirectTo }) => {
  const history = useHistory();  

  const handleClick = () => {
    history.push(redirectTo);
  };

  return (
    <Wrapper primary={primary} onClick={onClick || handleClick} >
      {children}
    </Wrapper>
  );
};

export default Button;
