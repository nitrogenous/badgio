import { useHistory } from 'react-router-dom';
import { ContainerLayout, Image, Button } from '../../Components';
import { ContentWrapper, Content } from './styled';
import BadgeGroup from '../../Assets/Images/Landing/badge-group.svg';

const Landing = () => {
  const history = useHistory();  


  const handleClick = () => {
    history.push('/create-new-badge');
  };

  return(
    <ContainerLayout centered>
      <ContentWrapper>
        <Image src={ BadgeGroup } width="50%"/>
        <Content>
          <span>Create <b>cool badges</b><br /> for your <b>events!</b></span>
          <Button onClick={handleClick} primary >Let's Do This!</Button>
        </Content>
      </ContentWrapper>
    </ContainerLayout>
  );
};

export default Landing;
