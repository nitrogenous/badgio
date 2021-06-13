import { ContainerLayout, Image, Button, Block } from '../../Components';
import { ContentWrapper, Content } from './styled';
import BadgeGroup from '../../Assets/Images/Landing/badge-group.svg';

const Landing = () => {
  return(
    <ContainerLayout centered>
      <ContentWrapper>
        <Image src={ BadgeGroup } width="50%"/>
        <Content>
          <span>Create <b>cool badges</b><br /> for your <b>events!</b></span>
          <Block>
            <Button redirectTo='/badge-gallery' primary >Badge Gallery</Button>
            <Button redirectTo='/create-new-badge' primary >Let's Do This!</Button>
          </Block>
        </Content>
      </ContentWrapper>
    </ContainerLayout>
  );
};

export default Landing;
