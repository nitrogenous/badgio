import { Wrapper } from './styled';
import { Button, Logo, Block } from '../index';

const Header = () => {
  return(
    <Wrapper>
      <Logo />
      <Block>
        <Button primary redirectTo='/guide'>Guide</Button>
        <Button primary redirectTo='/create-new-badge'>Create New Event!</Button>
      </Block>
    </Wrapper>
  );
};

export default Header;
