import { Wrapper } from './styled';
import { Button, Logo } from '../index';

const Header = () => {
  
  return(
    <Wrapper>
      <Logo />
      <Button primary>Create Badge!</Button>
    </Wrapper>
  );
};

export default Header;
