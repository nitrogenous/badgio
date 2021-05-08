import { useHistory } from 'react-router-dom';
import { Wrapper } from './styled';

const Logo = () => {
  const history = useHistory();  

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Wrapper onClick={handleClick}>
      badgio
    </Wrapper>
  );
};

export default Logo;