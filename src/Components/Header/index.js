import { useHistory } from 'react-router-dom';
import { Wrapper } from './styled';
import { Button, Logo } from '../index';

const Header = () => {
  const history = useHistory();  

  const redirectToGuide = () => {
    history.push('/guide');
  };

  const handleClick = () => {
    history.push('/create-new-badge');
  };

  return(
    <Wrapper>
      <Logo />
      <div>
        <Button primary onClick={redirectToGuide}>Guide</Button>
        <Button primary onClick={handleClick}>Create New Event!</Button>
      </div>
    </Wrapper>
  );
};

export default Header;
