import { useHistory } from 'react-router-dom';
import { Wrapper } from './styled';
import { Button, Logo } from '../index';

const Header = () => {
  const history = useHistory();  

  const handleClick = () => {
    history.push('/create-new-badge');
  };

  return(
    <Wrapper>
      <Logo />
      <Button primary onClick={handleClick}>Create Badge!</Button>
    </Wrapper>
  );
};

export default Header;
